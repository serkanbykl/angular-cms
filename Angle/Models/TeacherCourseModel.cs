using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Angle.Models
{


    //Teacher > Course Content
    [Table("TeacherCourse")]
    public class TeacherCourseModel
    {
        [Key]
        public int TCID { get; set; }

        [Required]
        [Column(TypeName = "smallint")]
        public int CID { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(MAX)")]
        public string TID { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(500)")]
        public string Content { get; set; }
    }
}
