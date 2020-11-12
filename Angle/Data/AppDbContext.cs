using Angle.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angle.Data
{
    public class AppDbContext : IdentityDbContext<IdentityUser>
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        //** Roles **
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<IdentityRole>().HasData(
                    new { Id = "1", Name = "Admin", NormalizedName = "ADMIN" },
                    new { Id = "2", Name = "Teacher", NormalizedName = "TEACHER" },
                    new { Id = "3", Name = "Student", NormalizedName = "STUDENT" }
                );
        }
        public DbSet<CourseModel> Courses { get; set; }
        public DbSet<StudentCourseModel> StudentCourses { get; set; }
        public DbSet<TeacherCourseModel> TeacherCourses { get; set; }
        public DbSet<AccountModel> Accounts { get; set; }

    }
}
