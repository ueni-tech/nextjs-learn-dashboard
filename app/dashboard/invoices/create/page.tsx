import { fetchCustomers } from "@/app/lib/data"
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";

export default async function page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {label: "Invoices", href: "/dashboard/invoices"},
          {
            label: "Create Invoices",
            href: "/dashboard/invoices/create",
            active: true
          }
        ]}
      />
      <Form customers={customers} />
    </main>
  )
}