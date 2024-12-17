using Horoscopo.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Horoscope.Infrastructure.Data
{
    public class ApplicationDbContext: DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }


        public DbSet<HoroscopeLog> horoscopeLogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<HoroscopeLog>(entity =>
            {
                entity.ToTable("HoroscopeLog");
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Id).ValueGeneratedOnAdd(); 
                entity.Property(x => x.Name).IsRequired().HasMaxLength(100);
                entity.Property(x => x.Sign).IsRequired().HasMaxLength(20);
                entity.Property(x => x.BirthDate).IsRequired().HasColumnType("DATETIME");
                entity.Property(x => x.CreatedAt).HasDefaultValueSql("CURRENT_TIMESTAMP").HasColumnType("DATETIME");
                entity.Property(x => x.Email).IsRequired().HasMaxLength(50);
                entity.Property(x => x.Gender).IsRequired().HasMaxLength(20);
               
            });
        }

    }
}
