using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class StaffDetails
    {
        public StaffDetails()
        {
            Token = new HashSet<Token>();
        }

        public int StaffId { get; set; }
        public int EnrolledSalonId { get; set; }
        public int? ShopLocationId { get; set; }
        public string StaffName { get; set; }
        public string StaffMobileNumber { get; set; }
        public int AddressId { get; set; }
        public string CurrentlyWorkingIndicator { get; set; }
        public string FromTime { get; set; }
        public string ToTime { get; set; }
        public string CommissionOn { get; set; }
        public decimal? CommissionPercentage { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public Address Address { get; set; }
        public SalonLocation ShopLocation { get; set; }
        public ICollection<Token> Token { get; set; }
    }
}
