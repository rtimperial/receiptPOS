 odoo.define('receiptPOS.posReceiptJs', function (require) {
 "use strict";

var gui = require('point_of_sale.gui');

var models = require('point_of_sale.models');

var _super_posmodel = models.PosModel.prototype;



models.PosModel = models.PosModel.extend({

    initialize: function (session, attributes) {

    //New Code
    var company_model = _.find(this.models, function(model){

            return model.model === 'res.company';

        });

        company_model.fields.push('street','street2','city', 'state_id');
        console.debug('---------------' + company_model.fields);

        // Inheritance

        return _super_posmodel.initialize.call(this, session, attributes);

    },

});

    gui.Gui.prototype.screen_classes.filter(function(el) { return el.name == 'clientlist'})[0].widget.include({

    render_list: function (partners) {

        var self = this;

        this._super.apply(this, arguments);

        //console.debug('--------------- RENDER LIST');

    },

    display_client_details: function (visibility, partner, clickpos) {

        var self = this;

        this._super.apply(this, arguments);

        //console.debug('--------------- TEST --- ');

    }

});

});

