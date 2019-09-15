using System;
using System.Collections.Generic;
using System.Text;

namespace StyleSoft.Domain.Data.Contract
{

    public interface IRepositoryWrapper
    {
        ISaloonDetailsRepository Saloon { get; }
    }
}
