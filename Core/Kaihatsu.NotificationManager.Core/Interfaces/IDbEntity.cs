namespace Kaihatsu.NotificationManager.Core.Interfaces;

public interface IDbEntity<T>
{
    public T Id { get; set; }
}

public interface IDbEntity : IDbEntity<int>
{
}