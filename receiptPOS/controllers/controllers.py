# -*- coding: utf-8 -*-
from odoo import http

# class Reciept(http.Controller):
#     @http.route('/reciept/reciept/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/reciept/reciept/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('reciept.listing', {
#             'root': '/reciept/reciept',
#             'objects': http.request.env['reciept.reciept'].search([]),
#         })

#     @http.route('/reciept/reciept/objects/<model("reciept.reciept"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('reciept.object', {
#             'object': obj
#         })