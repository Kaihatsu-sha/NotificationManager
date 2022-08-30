using Kaihatsu.NotificationManager.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace Kaihatsu.NotificationManager.DAL.Context;

public class ManagerContext : DbContext
{
    public DbSet<Template> Templates { get; set; }
    public DbSet<Message> Messages { get; set; }


    public ManagerContext(DbContextOptions<ManagerContext> options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        //builder.Entity<Template>()
        //    .Property(p => p.Content)
        //    .HasColumnType("blob");

        //builder.Entity<Message>()
        //    .Property(p => p.Content)
        //    .HasColumnType("blob");
    }
}
