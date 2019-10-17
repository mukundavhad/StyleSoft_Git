using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class Address
    {
        public Address()
        {
            StaffDetails = new HashSet<StaffDetails>();
        }

        public int AddressId { get; set; }
        public string Mobile { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Locality { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PinCode { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public ICollection<StaffDetails> StaffDetails { get; set; }
    }
}
