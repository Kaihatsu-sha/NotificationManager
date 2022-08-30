using Kaihatsu.NotificationManager.Core.Interfaces;
using Kaihatsu.NotificationManager.DAL.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Kaihatsu.NotificationManager.DAL.Repository;

public class NotificationManagerRepository<T> : IRepositoryAsync<T> where T : class, IDbEntity
{
    private readonly ILogger<NotificationManagerRepository<T>> _logger;
    private readonly ManagerContext _managerContext;

    public NotificationManagerRepository(ManagerContext context, ILogger<NotificationManagerRepository<T>> logger)
    {
        _logger = logger;
        _managerContext = context;
    }

    public async Task<T?> AddAsync(T item, CancellationToken cancellationToken = default)
    {
        await _managerContext
            .Set<T>()
            .AddAsync(item, cancellationToken)
            .ConfigureAwait(false);

        await _managerContext
            .SaveChangesAsync()
            .ConfigureAwait(false);

        return item;
    }

    public async Task<int> CountAsync(CancellationToken cancellationToken = default)
    {
        int count = await _managerContext
            .Set<T>()
            .CountAsync(cancellationToken)
            .ConfigureAwait(false);

        return count;
    }

    public async Task<T?> DeleteAsync(T item, CancellationToken cancellationToken = default)
    {
        if (!await _managerContext.Set<T>().AnyAsync(i => i.Id == item.Id, cancellationToken).ConfigureAwait(false))
            return null;

        _managerContext.Entry(item).State = EntityState.Deleted;
        await _managerContext.SaveChangesAsync(cancellationToken).ConfigureAwait(false);

        return item;
    }

    public async Task<IEnumerable<T>> GetAllAsync(CancellationToken cancellationToken = default)
    {
       var items = await _managerContext
            .Set<T>()
            .ToArrayAsync(cancellationToken)
            .ConfigureAwait(false);

        return items;
    }

    public async Task<T?> GetByIdAsync<TId>(TId id, CancellationToken cancellationToken = default) where TId : notnull
    {
        var item = await _managerContext
            .Set<T>()
            .FindAsync(new object[] { id }, cancellationToken)
            //.FirstOrDefaultAsync(item => item.Id == id, cancellationToken)
            .ConfigureAwait(false);

        return item;
    }

    public async Task<T?> UpdateAsync(T item, CancellationToken cancellationToken = default)
    {
        if (!await _managerContext.Set<T>().AnyAsync(i => i.Id == item.Id, cancellationToken).ConfigureAwait(false))
            return null;

        _managerContext.Set<T>().Update(item);
        await _managerContext.SaveChangesAsync(cancellationToken).ConfigureAwait(false);
        
        return item;
    }
}
