using System;
using System.Collections.Generic;
using System.Text;
using StyleSoft.Domain.Data.Models;
namespace StyleSoft.Domain.Data.Contract
{
       public interface IEnrolledSalonDetailsRepository : IRepositoryBase<EnrolledSalon>
    {
        bool Authenticate();
        IEnumerable<EnrolledSalon> SearchOwnerName(string searchString);

        //IEnumerable<SalonLocation> GetAllSaloonDetails();
    }
}
