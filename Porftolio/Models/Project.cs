using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace Porftolio.Models
{
    public class Project
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Enter a title")]
        public string Title { get; set; }
        public string Description { get; set; }

        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }

        [DefaultValue(false)]
        public bool IsHighlighted { get; set; }

        public List<Image> Images { get; set; }

        [Required(ErrorMessage = "Enter used technologies")]
        public List<Technology> Technologies { get; set; }
    }
}
