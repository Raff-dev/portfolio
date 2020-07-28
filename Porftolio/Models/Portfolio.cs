using System.Collections.Generic;


namespace Porftolio.Models
{
    public class Porftolio
    {
        public string Title { get; set; }
        public string About { get; set; }
        public List<Image> Images { get; set; }
        public List<Technology> Technologies { get; set; }

    }
}
