using System.ComponentModel.DataAnnotations;

namespace Porftolio.Models
{
    public class Technology
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public Image Image { get; set; }
    }
}
