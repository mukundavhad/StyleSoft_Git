﻿using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace StyleSoft.Domain.Data.Contract
{
    public interface IRepositoryBase<T>
    {
        IEnumerable<T> FindAll();
        IEnumerable<T> FindByCondition(Expression<Func<T, bool>> expression);
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
        void Save();
    }
}
