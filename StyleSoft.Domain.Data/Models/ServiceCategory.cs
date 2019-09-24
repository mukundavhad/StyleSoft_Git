using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class ServiceCategory
    {
        public ServiceCategory()
        {
            Services = new HashSet<Services>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public ICollection<Services> Services { get; set; }
    }
}
