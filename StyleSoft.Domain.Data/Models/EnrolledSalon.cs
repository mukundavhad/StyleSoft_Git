using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class EnrolledSalon
    {
        public int PkId { get; set; }
        public string SalonOwnerMobile { get; set; }
        public string SalonOwnerName { get; set; }
        public string SalonOwnerEmailId { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
