using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Angle.Models
{
 //Student > Course Detail
    [Table("StudentCourse")]
    public class StudentCourseModel
    {
        [Key]
        public int SCID { get; set; }

        [Required]
        [Column(TypeName = "smallint")]
        public int CID { get; set; }


        [Required]
        [Column(TypeName = "nvarchar(MAX)")]
        public string SID { get; set; }


        [Column(TypeName = "decimal(18, 2)")]
        public float Fees { get; set; }
    }
}
