using System;
using System.Collections.Generic;
using System.Text;
using StyleSoft.Domain.Data.Models;
namespace StyleSoft.Domain.Data.Contract
{
       public interface IServiceCategoryDetailsRepository : IRepositoryBase<ServiceCategory>
    {
        bool Authenticate();
        IEnumerable<ServiceCategory> SearchServiceCategoryName(string searchString);

        //IEnumerable<SalonLocation> GetAllSaloonDetails();
    }
}
