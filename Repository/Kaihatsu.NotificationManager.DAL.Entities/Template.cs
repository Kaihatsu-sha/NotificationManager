
using Kaihatsu.NotificationManager.Core.Entities;

namespace Kaihatsu.NotificationManager.DAL.Entities;

public class Template : BaseEntity
{
    public string Name { get; set; }
    public string Title { get; set; }
    public byte[] Content { get; set; }
}
