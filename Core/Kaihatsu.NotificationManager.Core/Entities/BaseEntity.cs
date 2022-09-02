using Kaihatsu.NotificationManager.Core.Interfaces;

namespace Kaihatsu.NotificationManager.Core.Entities;

public abstract class BaseEntity : IDbEntity, IEquatable<BaseEntity>
{
    public int Id { get; set; }

    public bool Equals(BaseEntity? other)
    {
        if (other is null)
            return false;
        if (ReferenceEquals(this, other))
            return true;
        return other.Id == Id;
    }

    public bool Equals(object? obj)
    {
        if (obj is null)
            return false;
        if (ReferenceEquals(this, obj))
            return true;
        if(obj.GetType() != typeof(BaseEntity))
            return false;

        return Equals((BaseEntity)obj);
    }

    public override int GetHashCode()
    {
        return Id;
    }
}
