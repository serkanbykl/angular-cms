using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Angle.Models
{
    //Course Detail
    [Table("Course")]
    public class CourseModel
    {
        [Key]
        public int CID { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(MAX)")]
        public string TID { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string CName { get; set; }

        [Required]
        [Column(TypeName = "decimal(18, 2)")]
        public float Fees { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime Duration { get; set; }
    }
}
