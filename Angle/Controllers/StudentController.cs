using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Angle.Data;
using Angle.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Angle.Migrations;
using System.Security.Cryptography.X509Certificates;

namespace Angle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        //** Managers and Settings
        protected bool GetUserId(string id)
            // Real UserName
        {   var userName = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            // Real UserId
            var userId = _db.Users.Where(c => c.UserName == userName).Select(x => x.Id).First();
            if (userId==id)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private readonly AppDbContext _db;
        public StudentController(AppDbContext db)
        {
            _db = db;
        }


        [HttpGet("[action]")]
        [Authorize(Policy = "RequireStudentRole")]
        public IActionResult GetCourses()
        {
            var courses = _db.Courses.Join(
                            _db.Users,
                            c => c.TID,
                            u => u.Id,
                            (c, u) => new
                            {
                                cid = c.CID,
                                tid=c.TID,
                                cName = c.CName,
                                fees = c.Fees,
                                teacherName = _db.Accounts.Where(x => x.Id == c.TID).Select(x => x.UserName),
                                duration = c.Duration
                            }
                        ).ToList();
            return Ok(courses);

        }


        
        [HttpPost("[action]")]
        [Authorize(Policy = "RequireStudentRole")]
        public async Task<IActionResult> RegisterCourse([FromBody] StudentCourseModel formdata)
        {
            var fees = _db.Courses.Where(c => c.CID == formdata.CID).Select(y => y.Fees).FirstOrDefault();
            var newRegister = new StudentCourseModel
            {
                CID = formdata.CID,
                SID = formdata.SID,
                Fees = fees
            };

            bool securityMethod = GetUserId(formdata.SID);
            if (!securityMethod)
            {
                return Unauthorized();
            }

            var check = _db.StudentCourses.Where(c => c.SID == formdata.SID && c.CID == formdata.CID).Any();
            if (check)
            {
                return BadRequest(new { message = "Error! Already Registered." });
            }
            await _db.StudentCourses.AddAsync(newRegister);

            await _db.SaveChangesAsync();
            return Ok(new JsonResult("Registered Successfully."));
        }

        [HttpGet("[action]/{id}")]
        [Authorize(Policy = "RequireStudentRole")]
        public ActionResult GetRegCourses([FromRoute] string id)
        {

            bool securityMethod = GetUserId(id);
            if (!securityMethod)
            {
                return Unauthorized();
            }
            else
            {
                var regCourses = _db.Courses.Join(
                            _db.StudentCourses.Where(x=> x.SID==id),
                            c => c.CID,
                            s => s.CID,
                            (c, s) => new
                            {
                                cid = s.CID,
                                cName = c.CName,
                                feesCourse = c.Fees,
                                feesStudent = s.Fees,
                                teacherName = _db.Accounts.Where(x=> x.Id==c.TID).Select(x=>x.UserName),
                                duration = c.Duration
                            }
                        ).ToList();

                return Ok(regCourses);
            }
        }

        [HttpGet("[action]/{id}/{cid}")]
        [Authorize(Policy = "RequireStudentRole")]
        public IActionResult GetContentCourse([FromRoute] string id, [FromRoute] int cid)
        {
            bool securityMethod = GetUserId(id);
            if (!securityMethod)
            {
                return Unauthorized();
            }
            var check = _db.StudentCourses.Where(c => c.SID == id).Select(x => x.CID);
            //Kayıtlı olduğu kurstan kursun id'lerini çekiyor.
            var content = _db.TeacherCourses.Where(y => check.Contains(y.CID) && y.CID==cid);
            //Öğretmenin içeriklerini alıyor eğer checkteki id eşitse

            return Ok(content.ToList());
        }
    }
}
