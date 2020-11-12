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

namespace Angle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {

        //** Managers and Settings
        protected bool GetUserId(string id)
        {
            // Real UserName
            var userName = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            // Real UserId
            var userId = _db.Users.Where(c => c.UserName == userName).Select(x => x.Id).First();
            if (userId == id)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        private readonly AppDbContext _db;
        public TeacherController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet("[action]/{id}")]
        [Authorize(Policy = "RequireTeacherRole")]
        public ActionResult GetMyCourses([FromRoute] string id)
        {

            bool securityMethod = GetUserId(id);
            if (!securityMethod)
            {
                return Unauthorized();
            }
            else
            {

                return Ok(_db.Courses.Where(c => c.TID == id).ToList());
            }
        }



        [HttpGet("[action]/{id}/{cid}")]
        [Authorize(Policy = "RequireTeacherRole")]
        public IActionResult GetContentCourse([FromRoute] string id, [FromRoute] int cid)
        {
            bool securityMethod = GetUserId(id);
            if (!securityMethod)
            {
                return Unauthorized();
            }

            return Ok(_db.TeacherCourses.Where(c => c.TID == id && c.CID == cid).ToList());
        }

        [HttpPost("[action]")]
        [Authorize(Policy = "RequireTeacherRole")]
        public async Task<IActionResult> AddContent([FromBody] TeacherCourseModel formdata)
        {

            bool securityMethod = GetUserId(formdata.TID);
            if (!securityMethod)
            {
                return Unauthorized();
            }
            var newContent = new TeacherCourseModel
            {
                CID = formdata.CID,
                TID = formdata.TID,
                Content = formdata.Content
            };


            await _db.TeacherCourses.AddAsync(newContent);

            await _db.SaveChangesAsync();
            return Ok(new JsonResult("Add Content Successfully."));
        }

        [HttpDelete("[action]/{id}/{tcid}")]
        [Authorize(Policy = "RequireTeacherRole")]
        public async Task<IActionResult> DeleteContent([FromRoute] string id, [FromRoute] int tcid)
        {

            bool securityMethod = GetUserId(id);
            if (!securityMethod)
            {
                return Unauthorized();
            }

            var findContent = await _db.TeacherCourses.FindAsync(tcid);

            if (findContent == null)
            {
                return NotFound();
            }
            _db.TeacherCourses.Remove(findContent);
            await _db.SaveChangesAsync();
            return Ok(new JsonResult(id + "Deleted"));
        }



    }
}
