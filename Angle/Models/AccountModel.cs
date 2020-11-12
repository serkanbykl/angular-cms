using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Angle.Models
{
    public class AccountModel:IdentityUser
    {
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(300)")]
        public string EducationDetail { get; set; }


        [Column(TypeName = "nvarchar(300)")]
        public string PersonalDetail { get; set; }


    }
}
