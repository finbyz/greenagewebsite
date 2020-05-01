# -*- coding: utf-8 -*-
# Copyright (c) 2019, FinByz Tech Pvt Ltd and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.website.website_generator import WebsiteGenerator
from frappe.model.naming import make_autoname

class FAQS(WebsiteGenerator):
	def autoname(self):
		if self.meta.autoname:
			series = self.meta.autoname
			name = None
			while not name:
				name = make_autoname(series, "FAQS", self)
				if frappe.db.exists("FAQS", name):
					name = None

			self.name = name

		else:
			self.name = self.scrubbed_title()
			
def get_list_context(context=None):
	list_context = frappe._dict(
		title = _('FAQS')
	)

	return list_context