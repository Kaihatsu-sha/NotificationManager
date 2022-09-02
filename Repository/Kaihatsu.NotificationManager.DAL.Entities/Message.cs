using Kaihatsu.NotificationManager.Core.Entities;

namespace Kaihatsu.NotificationManager.DAL.Entities;

public class Message : BaseEntity
{
    public string Name { get; set; }
    public int TemplateId { get; set; }
    public string SenderType { get; set; }
    public string Recipient { get; set; }
    public byte[] Content { get; set; }
}
