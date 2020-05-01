from __future__ import unicode_literals
import frappe

@frappe.whitelist()
def customer_before_save(self, method):
	doc = frappe.get_single("Customer Details")
	doc.ignore_permissions = True

	if self.show_on_website:
		customer = frappe.db.exists("Customer Details List", {'customer_ref': self.name})
		if not customer:
			doc.append('customer_details_list', {
					'customer_ref': self.name,
					'customer': self.customer_name,
					'image': self.image
				})
			doc.save()

		else:
			customer_doc = frappe.get_doc("Customer Details List", customer)
			customer_doc.customer = self.customer_name
			customer_doc.image = self.image
			customer_doc.save()
			frappe.db.commit()

	else:
		remove_from_customer_details(self, doc)


@frappe.whitelist()
def customer_on_trash(self, method):
	doc = frappe.get_single("Customer Details")
	doc.ignore_permissions = True
	remove_from_customer_details(self, doc)

def remove_from_customer_details(self, doc):
	if frappe.db.exists("Customer Details List", {'customer_ref': self.name}):
		to_remove = [row for row in doc.get('customer_details_list') if row.customer_ref == self.name]
		[doc.remove(row) for row in to_remove]
		doc.save()

	frappe.db.commit()
