namespace Kaihatsu.NotificationManager.NotificationAPI;

public class MessageDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int TemplateId { get; set; }
    public string SenderType { get; set; }
    public string Recipient { get; set; }
    public string Content { get; set; }
}
