using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angle.Data;
using Angle.Helpers;
using Angle.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Angle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        //** Managers and Settings

        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signManager;
        private readonly AppDbContext _db;
        public AdminController(AppDbContext db, UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _db = db;
            _userManager = userManager;
            _signManager = signInManager;
        }

        // Teacher

        [HttpGet("[action]")]
        [Authorize(Policy = "RequireAdminRole")]
        public IActionResult GetTeachers()
        {

            var role = _db.UserRoles.Where(c => c.RoleId == "2").Select(x => x.UserId);
            var teachers = _db.Users.Where(y => role.Contains(y.Id));
            return Ok(teachers.ToList());


        }

        [HttpPost("[action]")]
        [Authorize(Policy = "RequireAdminRole")]
        public async Task<IActionResult> AddTeacher([FromBody] AccountModel formdata)
        {
            //** All Errors > Registration **
            List<string> errorList = new List<string>();
            var user = new AccountModel
            {
                UserName = formdata.UserName,
                PersonalDetail = formdata.PersonalDetail,
                EducationDetail = formdata.EducationDetail,
                Name=formdata.Name,
                Password=formdata.Password,
                SecurityStamp = Guid.NewGuid().ToString()
            };
            var result = await _userManager.CreateAsync(user, formdata.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "Teacher");
                return Ok(new { username = user.UserName, status = 1, message = "Registration Succesful!" });
            }
            else
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                    errorList.Add(error.Description);
                }
            }
            return BadRequest(new JsonResult(errorList));


        }

        [HttpPut("[action]/{id}")]
        [Authorize(Policy = "RequireAdminRole")]
        public async Task<IActionResult> UpdateTeacher([FromRoute] string id, [FromBody] AccountModel formdata)
        {



            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var findTeacher = _db.Accounts.FirstOrDefault(o => o.Id == id);
            if (findTeacher == null)
            {
                return NotFound();
            }
            await _userManager.ChangePasswordAsync(findTeacher, findTeacher.Password, formdata.Password);
            findTeacher.UserName = formdata.UserName;
            findTeacher.EducationDetail = formdata.EducationDetail;
            findTeacher.PersonalDetail = formdata.PersonalDetail;
            findTeacher.Password = formdata.Password;
            findTeacher.Name = formdata.Name;
            var result = await _userManager.UpdateAsync(findTeacher);

            await _db.SaveChangesAsync();
            return Ok(new JsonResult(id + "Updated"));
        }

        [HttpDelete("[action]/{id}")]
        [Authorize(Policy = "RequireAdminRole")]
        public async Task<IActionResult> DeleteTeacher([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var findTeacher = await _db.Users.FindAsync(id);

            if (findTeacher == null)
            {
                return NotFound();
            }

            _db.Users.Remove(findTeacher);
            await _db.SaveChangesAsync();
            return Ok(new JsonResult(id + "Deleted"));
        }


        // Course

        [HttpGet("[action]")]
        [Authorize(Policy = "RequireAdminRole")]
        public IActionResult GetCourses()
        {
            var courses = _db.Courses.Join(
            _db.Accounts,
            c => c.TID,
            t => t.Id,
            (c, t) => new
            {
                teacherName = t.Name,
                cid=c.CID,
                cName=c.CName,
                duration=c.Duration,
                tid=c.TID,
                fees=c.Fees
            }
        ).ToList();
            return Ok(courses);

        }

        [HttpPost("[action]")]
        [Authorize(Policy = "RequireAdminRole")]
        public async Task<IActionResult> AddCourse([FromBody] CourseModel formdata)
        {
            var newcourse = new CourseModel
            {
                CName = formdata.CName,
                TID = formdata.TID,
                Fees = formdata.Fees,
                Duration = formdata.Duration
            };
            await _db.Courses.AddAsync(newcourse);

            await _db.SaveChangesAsync();
            return Ok(new JsonResult("Add Course Succesful"));
        }

        [HttpPut("[action]/{id}")]
        [Authorize(Policy = "RequireAdminRole")]
        public async Task<IActionResult> UpdateCourse([FromRoute] int id, [FromBody] CourseModel formdata)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var findCourse = _db.Courses.FirstOrDefault(o => o.CID == id);
            if (findCourse == null)
            {
                return NotFound();
            }
            findCourse.CName = formdata.CName;
            findCourse.TID = formdata.TID;
            findCourse.Fees = formdata.Fees;
            findCourse.Duration = formdata.Duration;
            _db.Entry(findCourse).State = EntityState.Modified;
            await _db.SaveChangesAsync();

            //Update Teacher
            var findTeacherCourse = _db.TeacherCourses.FirstOrDefault(o => o.CID == id);
            if (findTeacherCourse != null)
            {
                findTeacherCourse.TID = formdata.TID;
                _db.Entry(findTeacherCourse).State = EntityState.Modified;
                await _db.SaveChangesAsync();
            }

            
            return Ok(new JsonResult(id + "Updated"));
        }

        [HttpDelete("[action]/{id}")]
        [Authorize(Policy = "RequireAdminRole")]
        public async Task<IActionResult> DeleteCourse([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var findCourse = await _db.Courses.FindAsync(id);

            if (findCourse == null)
            {
                return NotFound();
            }

            _db.Courses.Remove(findCourse);
            await _db.SaveChangesAsync();
            return Ok(new JsonResult(id + "Deleted"));
        }

        [HttpGet("[action]/{cid}")]
        [Authorize(Policy = "RequireAdminRole")]
        public IActionResult GetCourseStudents([FromRoute] int cid)
        {

            var students = _db.Accounts.Join(
            _db.StudentCourses.Where(x => x.CID == cid),
            u => u.Id,
            c => c.SID,
            (u, c) => new
            {
                name = u.Name,
                feesStudent = c.Fees,
                sid=u.Id
            }
        ).ToList();

            return Ok(students);

        }

        // Content
        [HttpGet("[action]/{cid}")]
        [Authorize(Policy = "RequireAdminRole")]
        public IActionResult GetContentCourse([FromRoute] int cid)
        {

            return Ok(_db.TeacherCourses.Where(c => c.CID == cid).ToList());
        }

        // Student

        [HttpGet("[action]")]
        [Authorize(Policy = "RequireAdminRole")]
        public IActionResult GetStudents()
        {

            var role = _db.UserRoles.Where(c => c.RoleId == "3").Select(x => x.UserId);
            var students = _db.Users.Where(y => role.Contains(y.Id));
            return Ok(students.ToList());

        }

        [HttpDelete("[action]/{id}")]
        [Authorize(Policy = "RequireAdminRole")]
        public async Task<IActionResult> DeleteStudent([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var findStudent = await _db.Users.FindAsync(id);

            if (findStudent == null)
            {
                return NotFound();
            }

            _db.Users.Remove(findStudent);
            await _db.SaveChangesAsync();
            return Ok(new JsonResult(id + "Deleted"));
        }


        [HttpGet("[action]/{id}")]
        [Authorize(Policy = "RequireAdminRole")]
        public IActionResult GetStudentCourses([FromRoute] string id)
        {
        

            var studentCourses = _db.Accounts.Join(
                _db.StudentCourses.Where(x=>x.SID==id),
                u => u.Id,
                c => c.SID,
                (u, c) => new
                {
                    id=u.Id,
                    name = u.Name,
                    feesStudent = c.Fees,
                    cid=c.CID,
                    scid=c.SCID
                }
                    ).Join(
                _db.Courses,
                c=> c.cid,
                sc=> sc.CID,
                (c,sc)=> new
                {
                    cName=sc.CName,
                    feesCourse=sc.Fees,
                    feesStudent=c.feesStudent,
                    cid=sc.CID,
                    duration=sc.Duration,
                    scid = c.scid

                }
                ).ToList();


            return Ok(studentCourses);

        }



        [HttpPut("[action]")]
        [Authorize(Policy = "RequireAdminRole")]
        public async Task<IActionResult> UpdateStudentFees([FromBody] StudentCourseModel formdata)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var findCourse = _db.StudentCourses.FirstOrDefault(o => o.SCID == formdata.SCID);
            if (findCourse == null)
            {
                return NotFound();
            }
            findCourse.Fees = formdata.Fees;
            _db.Entry(findCourse).State = EntityState.Modified;
            await _db.SaveChangesAsync();


            return Ok(new JsonResult("Updated"));
        }
    }
}
