
namespace Kaihatsu.NotificationManager.Core.Interfaces;

public interface IRepositoryAsync<T> where T : class, IDbEntity
{
    Task<IEnumerable<T>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<T?> GetByIdAsync<TId>(TId id, CancellationToken cancellationToken = default) where TId : notnull;
    Task<int> CountAsync(CancellationToken cancellationToken = default);
    Task<T?> AddAsync(T item, CancellationToken cancellationToken = default);
    Task<T?> UpdateAsync(T item, CancellationToken cancellationToken = default);
    Task<T?> DeleteAsync(T item, CancellationToken cancellationToken = default);
}
