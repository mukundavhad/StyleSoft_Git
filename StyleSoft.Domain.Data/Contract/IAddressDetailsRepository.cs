using System;
using System.Collections.Generic;
using System.Text;
using StyleSoft.Domain.Data.Models;
namespace StyleSoft.Domain.Data.Contract
{
       public interface IAddressDetailsRepository : IRepositoryBase<Address>
    {
        bool Authenticate();
        IEnumerable<Address> SearchAddress(string searchString);
        int GetAddressNo();

        //IEnumerable<SalonLocation> GetAllSaloonDetails();
    }
}
