# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "greenagewebsite"
app_title = "Greenagewebsite"
app_publisher = "FinByz Tech Pvt Ltd"
app_description = "Custom App For Website"
app_icon = "octicon octicon-device-desktop"
app_color = "Orange"
app_email = "info@finbyz.com"
app_license = "GPL 3.0"

app_include_js = [
	"assets/js/summernote.min.js",
	"assets/js/comment_desk.min.js",
	"assets/js/editor.min.js",
	"assets/js/timeline.min.js"
]

app_include_css = [
	"assets/css/summernote.min.css"
]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/greenagewebsite/css/greenagewebsite.css"
# app_include_js = "/assets/greenagewebsite/js/greenagewebsite.js"

# include js, css files in header of web template
# web_include_css = "/assets/greenagewebsite/css/greenagewebsite.css"
# web_include_js = "/assets/greenagewebsite/js/greenagewebsite.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "greenagewebsite.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]
website_generators = ["News"]
# Installation
# ------------

# before_install = "greenagewebsite.install.before_install"
# after_install = "greenagewebsite.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "greenagewebsite.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"greenagewebsite.tasks.all"
# 	],
# 	"daily": [
# 		"greenagewebsite.tasks.daily"
# 	],
# 	"hourly": [
# 		"greenagewebsite.tasks.hourly"
# 	],
# 	"weekly": [
# 		"greenagewebsite.tasks.weekly"
# 	]
# 	"monthly": [
# 		"greenagewebsite.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "greenagewebsite.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "greenagewebsite.event.get_events"
# }

doc_events = {
	"Customer": {
		"before_save": "greenagewebsite.api.customer_before_save",
	},
}