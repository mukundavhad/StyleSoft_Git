﻿using System;
using System.Collections.Generic;
using System.Text;
using StyleSoft.Domain.Data.Models;
namespace StyleSoft.Domain.Data.Contract
{
       public interface IServicesDetailsRepository : IRepositoryBase<Services>
    {
        bool Authenticate();

        IEnumerable<ServicesView> GetAllServicesDetails();
        int GetServiceNo();

        IEnumerable<Services> SearchServiceName(string searchString);
    }
}
