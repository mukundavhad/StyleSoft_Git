using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class Customer
    {
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string CustomerMobile { get; set; }
        public int AddressId { get; set; }
        public string RelationType { get; set; }
        public string Gender { get; set; }
        public DateTime? DateofBirth { get; set; }
        public string AlternateContact { get; set; }
        public string EmailId { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}
