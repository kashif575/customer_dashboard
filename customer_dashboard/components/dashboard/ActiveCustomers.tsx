import Image from "next/image";
import Link from "next/link";
import User from "../../public/user.jpg";

const customers = [
  { id: 1, name: "Acme Inc.", revenue: 200 },
  { id: 2, name: "Globex Corp.", revenue: 450 },
  { id: 3, name: "TechNova", revenue: 320 },
  { id: 4, name: "Bright Solutions", revenue: 180 },
  { id: 5, name: "CloudSync", revenue: 560 },
  { id: 6, name: "Vertex Labs", revenue: 290 },
  { id: 7, name: "BluePeak Ltd.", revenue: 410 },
  { id: 8, name: "Nexa Systems", revenue: 375 },
  { id: 9, name: "Apex Digital", revenue: 620 },
  { id: 10, name: "PrimeWorks", revenue: 240 },
  { id: 11, name: "NovaTech", revenue: 510 },
  { id: 12, name: "Skyline Group", revenue: 340 },
];

export default function ActiveCustomers() {
  return (
    <div className="active-users">
      <div className="Users-list">
        <div className="section-head">
          <h3>Active Customers</h3>
          <Link href="/customers">View more</Link>
        </div>

        {customers.map((customer) => (
          <div className="user-detail" key={customer.id}>
            <div className="profile-img">
              <Image
                src={User}
                alt={`${customer.name} profile`}
                width={50}
                height={50}
                className="profile-image"
                sizes="50px"
              />
              <span>{customer.name}</span>
            </div>

            <div className="profit-amt">
              ${(customer.revenue / 100).toFixed(2)}
              <span>/mo</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
