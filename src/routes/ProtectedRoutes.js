import React from "react";

// Dashboard
import EventManagement from "../dashboard/EventManagement.js";
import SalesMonitoring from "../dashboard/SalesMonitoring.js";
import WebsiteAnalytics from "../dashboard/WebsiteAnalytics.js";
import FinanceMonitoring from "../dashboard/FinanceMonitoring.js";
import Cryptocurrency from "../dashboard/Cryptocurrency.js";
import HelpdeskService from "../dashboard/HelpdeskService.js";
import StorageManagement from "../dashboard/StorageManagement.js";
import ProductManagement from "../dashboard/ProductManagement.js";

// Apps
import GalleryMusic from "../apps/GalleryMusic.js";
import GalleryVideo from "../apps/GalleryVideo.js";
import Tasks from "../apps/tasks/taskmanager/Tasks.js";
import Chat from "../apps/messages/chat/Chat.js";
import Email from "../apps/messages/email/Email.js";
import AppCalendar from "../apps/tasks/calendar/AppCalendar.js";
import FileManager from "../apps/FileManager.js";
import Contacts from "../apps/networks/contacts/Contacts.js";
import Connections from "../apps/networks/connections/Connections.js";
import Businesspartners from "../apps/networks/businesspartners/Businesspartners.js";
import Groups from "../apps/networks/groups/Groups.js";
import CompanyWebsite from "../apps/portal/companywebsite/CompanyWebsite.js";
import CustomerPortal from "../apps/portal/customerportal/CustomerPortal.js";
import VendorPortal from "../apps/portal/vendorportal/VendorPortal.js";

//Home
import Myview from "../apps/home/myview/Myview.js";

// Customers
// import Customermasters from"../apps/customers/businesspartner/customermasters/Customermasters.js"
// import Salesevents from"../apps/customers/campaign/events/Salesevents.js"
// import Leads from"../apps/customers/businesspartner/leads/Leads.js"
// import Opportunities from"../apps/customers/presales/opportunities/Opportunities.js"
// import Salesactivities from"../apps/customers/activitytracker/activities/Salesactivities.js"
// import Salesbatches from"../apps/customers/masterdata/batches/Salesbatches.js"
// import Salesbillingcollection from"../apps/customers/billing/billingcollection/Salesbillingcollection.js"
// import Salesbillingreport from"../apps/customers/crmreport/billingreport/Salesbillingreport.js"
// import Salesbillings from"../apps/customers/billing/customerbilling/Salesbillings.js"
// import Salesbom from"../apps/customers/masterdata/billofmaterials/Salesbom.js"
// import Salescampaign from"../apps/customers/campaign/campaigns/Salescampaign.js"
// import Salescases from"../apps/customers/aftersales/cases/Salescases.js"
// import Salescatalogs from"../apps/customers/masterdata/catalogs/Salescatalogs.js"
// import Saleschannel from"../apps/customers/orgstructure/saleschannels/Saleschannel.js"
// import Salescommission from"../apps/customers/planbudget/salescommission/Salescommission.js"
// import Salescontacts from"../apps/customers/businesspartner/contacts/Salescontacts.js"
// import Salescontracts from"../apps/customers/sales/contracts/Salescontracts.js"
// import Salescustomerreport from"../apps/customers/crmreport/customerreport/Salescustomerreport.js"
// import Salesdelieryorders from"../apps/customers/delivery/deliveryorders/Salesdelieryorders.js"
// import Salesdeliveryreport from"../apps/customers/crmreport/deliveryreport/Salesdeliveryreport.js"
// import Salesdeliverytracking from"../apps/customers/delivery/deliverytracking/Salesdeliverytracking.js"
// import Salesdiscountbudget from"../apps/customers/planbudget/discountbudget/Salesdiscountbudget.js"
// import Salesdivisions from"../apps/customers/orgstructure/salesdivisions/Salesdivisions.js"
// // import Salesevents from"../apps/customers/Salesevents"
// import Salesfleets from"../apps/customers/masterdata/fleets/Salesfleets.js"
// import Salesgroups from"../apps/customers/orgstructure/salesgroups/Salesgroups.js"
// import Salesinventoryreport from"../apps/customers/crmreport/inventoryreport/Salesinventoryreport.js"
// import Saleskpi from"../apps/customers/planbudget/saleskpi/Saleskpi.js"
// import Saleskpireport from"../apps/customers/crmreport/kpireport/Saleskpireport.js"
// import Salesloyaltyprograms from"../apps/customers/loyalty/loyaltyprograms/Salesloyaltyprograms.js"
// import Salesmembership from"../apps/customers/loyalty/memberships/Salesmembership.js"
// import Salesoffices from"../apps/customers/orgstructure/salesoffices/Salesoffices.js"
// import Salesorders from"../apps/customers/sales/salesorders/Salesorders.js"
// import Salesequipments from"../apps/customers/masterdata/equipments/Salesequipments.js"
// import Salesorg from"../apps/customers/orgstructure/salesorg/Salesorg.js"
// import Salespersons from"../apps/customers/orgstructure/salespersons/Salespersons.js"
// import Salespricing from"../apps/customers/masterdata/pricing/Salespricing.js"
// import Salesproductreport from"../apps/customers/crmreport/productreport/Salesproductreport.js"
// import Salesproducts from"../apps/customers/masterdata/products/Salesproducts.js"
// import Salesproductsdetail from"../apps/customers/masterdata/products/Salesproductsdetail.js"
// import Salesproposals from"../apps/customers/presales/proposals/Salesproposals.js"
// import Salesquotations from"../apps/customers/presales/quotations/Salesquotations.js"
// import Salesrecurring from"../apps/customers/sales/recurringsalesorders/Salesrecurring.js"
// import Salesreport from"../apps/customers/crmreport/salesreport/Salesreport.js"
// import Salesrevenueplan from"../apps/customers/planbudget/revenueplanning/Salesrevenueplan.js"
// import Salesrewardcatalogs from"../apps/customers/loyalty/rewardcatalogs/Salesrewardcatalogs.js"
// import Salesserialnumbers from"../apps/customers/masterdata/serialnumbers/Salesserialnumbers.js"
// import Salesservicepartners from"../apps/customers/businesspartner/servicepartners/Salesservicepartners.js"
// import Salesshipment from"../apps/customers/delivery/shipment/Salesshipment.js"
// import Salesstandardterms from"../apps/customers/masterdata/standardterms/Salesstandardterms.js"
// import Salestarget from"../apps/customers/planbudget/salestarget/Salestarget.js"
// import Salestasks from"../apps/customers/activitytracker/tasks/Salestasks.js"
// import Salestechnicians from"../apps/customers/masterdata/technicians/Salestechnicians.js"
// import Salestenders from"../apps/customers/presales/tenders/Salestenders.js"
// import Salesvisits from"../apps/customers/activitytracker/salesvisits/Salesvisits.js"
// import Salesvoucherclaim from"../apps/customers/voucher/voucherclaim/Salesvoucherclaim.js"
// import Salesvouchermasters from"../apps/customers/voucher/vouchermasters/Salesvouchermasters.js"
// import Saleswarranty from"../apps/customers/masterdata/warranty/Saleswarranty.js"
// import Salesworkcenters from"../apps/customers/masterdata/workcenters/Salesworkcenters.js"
// import Salesserviceconfirmations from"../apps/customers/aftersales/confirmations/Salesserviceconfirmations.js"
// import Salesservicedispatching from"../apps/customers/aftersales/dispatching/Salesservicedispatching.js"
// import Salesserviceorders from"../apps/customers/aftersales/serviceorders/Salesserviceorders.js"
// import Serviceordersettlement from"../apps/customers/aftersales/settlement/Serviceordersettlement.js"
// import Servicerequest from"../apps/customers/aftersales/servicerequest/Servicerequest.js"
// import Territories from"../apps/customers/orgstructure/territories/Territories.js"
// import Territoryscopes from"../apps/customers/orgstructure/territoryscopes/Territoryscopes.js"
// import Saleswarrantyclaim from"../apps/customers/aftersales/warrantyclaim/Saleswarrantyclaim.js"

import Salesactivities from "../apps/sales/activitytracker/activities/Salesactivities.js"
import Salesvisits from "../apps/sales/activitytracker/salesvisits/Salesvisits.js"
import Salestasks from "../apps/sales/activitytracker/tasks/Salestasks.js"
import Salescases from "../apps/sales/aftersales/cases/Salescases.js"
import Salesserviceconfirmations from "../apps/sales/aftersales/confirmations/Salesserviceconfirmations.js"
import Salesservicedispatching from "../apps/sales/aftersales/dispatching/Salesservicedispatching.js"
import Salesserviceorders from "../apps/sales/aftersales/serviceorders/Salesserviceorders.js"
import Servicerequest from "../apps/sales/aftersales/servicerequest/Servicerequest.js"
import Serviceordersettlement from "../apps/sales/aftersales/settlement/Serviceordersettlement.js"
import Saleswarrantyclaim from "../apps/sales/aftersales/warrantyclaim/Saleswarrantyclaim.js"
import Salesbillingcollection from "../apps/sales/billing/billingcollection/Salesbillingcollection.js"
import Salesbillings from "../apps/sales/billing/customerbilling/Salesbillings.js"
import Salescontacts from "../apps/sales/businesspartner/contacts/Salescontacts.js"
import Customermasters from "../apps/sales/businesspartner/customermasters/Customermasters.js"
import Leads from "../apps/sales/businesspartner/leads/Leads.js"
import Salesservicepartners from "../apps/sales/businesspartner/servicepartners/Salesservicepartners.js"
import Salescampaign from "../apps/sales/campaign/campaigns/Salescampaign.js"
import Customerevents from "../apps/sales/campaign/events/Customerevents.js"
import Salesevents from "../apps/sales/campaign/events/Salesevents.js"
import Salesbillingreport from "../apps/sales/crmreport/billingreport/Salesbillingreport.js"
import Salescustomerreport from "../apps/sales/crmreport/customerreport/Salescustomerreport.js"
import Salesdeliveryreport from "../apps/sales/crmreport/deliveryreport/Salesdeliveryreport.js"
import Salesinventoryreport from "../apps/sales/crmreport/inventoryreport/Salesinventoryreport.js"
import Saleskpireport from "../apps/sales/crmreport/kpireport/Saleskpireport.js"
import Salesproductreport from "../apps/sales/crmreport/productreport/Salesproductreport.js"
import Salesreport from "../apps/sales/crmreport/salesreport/Salesreport.js"
import Salesdeliveryorders from "../apps/sales/delivery/deliveryorders/Salesdeliveryorders.js"
import Salesdeliverytracking from "../apps/sales/delivery/deliverytracking/Salesdeliverytracking.js"
import Salesshipment from "../apps/sales/delivery/shipment/Salesshipment.js"
import Salesloyaltyprograms from "../apps/sales/loyalty/loyaltyprograms/Salesloyaltyprograms.js"
import Salesmembership from "../apps/sales/loyalty/memberships/Salesmembership.js"
import Salesrewardcatalogs from "../apps/sales/loyalty/rewardcatalogs/Salesrewardcatalogs.js"
import Salesbatches from "../apps/sales/masterdata/batches/Salesbatches.js"
import Salesbom from "../apps/sales/masterdata/billofmaterials/Salesbom.js"
import Salescatalogs from "../apps/sales/masterdata/catalogs/Salescatalogs.js"
import SalescatalogsDetail from "../apps/sales/masterdata/catalogs/Salescatalogsdetail.js"
import Salesequipments from "../apps/sales/masterdata/equipments/Salesequipments.js"
import Salesfleets from "../apps/sales/masterdata/fleets/Salesfleets.js"
import Salespricing from "../apps/sales/masterdata/pricing/Salespricing.js"
import Salespricingdetail from "../apps/sales/masterdata/pricing/Salespricingdetail.js"
import Salespricingcreate from "../apps/sales/masterdata/pricing/Salespricingcreate.js"
import Salespricingchange from "../apps/sales/masterdata/pricing/Salespricingchange.js"
import Salesproducts from "../apps/sales/masterdata/products/Salesproducts.js"
import Salesproductsdetail from "../apps/sales/masterdata/products/Salesproductsdetail.js"
import Salesserialnumbers from "../apps/sales/masterdata/serialnumbers/Salesserialnumbers.js"
import Salesstandardterms from "../apps/sales/masterdata/standardterms/Salesstandardterms.js"
import Salestechnicians from "../apps/sales/masterdata/technicians/Salestechnicians.js"
import Saleswarranty from "../apps/sales/masterdata/warranty/Saleswarranty.js"
import Salesworkcenters from "../apps/sales/masterdata/workcenters/Salesworkcenters.js"
import Saleschannel from "../apps/sales/orgstructure/saleschannels/Saleschannel.js"
import Salesdivisions from "../apps/sales/orgstructure/salesdivisions/Salesdivisions.js"
import Salesgroups from "../apps/sales/orgstructure/salesgroups/Salesgroups.js"
import Salesoffices from "../apps/sales/orgstructure/salesoffices/Salesoffices.js"
import Salesorg from "../apps/sales/orgstructure/salesorg/Salesorg.js"
import Salespersons from "../apps/sales/orgstructure/salespersons/Salespersons.js"
import Territories from "../apps/sales/orgstructure/territories/Territories.js"
import Territoryscopes from "../apps/sales/orgstructure/territoryscopes/Territoryscopes.js"
import Salesdiscountbudget from "../apps/sales/planbudget/discountbudget/Salesdiscountbudget.js"
import Salesrevenueplan from "../apps/sales/planbudget/revenueplanning/Salesrevenueplan.js"
import Salescommission from "../apps/sales/planbudget/salescommission/Salescommission.js"
import Saleskpi from "../apps/sales/planbudget/saleskpi/Saleskpi.js"
import Salestarget from "../apps/sales/planbudget/salestarget/Salestarget.js"
import Opportunities from "../apps/sales/presales/opportunities/Opportunities.js"
import Salesproposals from "../apps/sales/presales/proposals/Salesproposals.js"
import Salesquotations from "../apps/sales/presales/quotations/Salesquotations.js"
import Salestenders from "../apps/sales/presales/tenders/Salestenders.js"
import Salescontracts from "../apps/sales/sales/contracts/Salescontracts.js"
import Salesrecurring from "../apps/sales/sales/recurringsalesorders/Salesrecurring.js"
import Salesorders from "../apps/sales/sales/salesorders/Salesorders.js"
import Salesvoucherclaim from "../apps/sales/voucher/voucherclaim/Salesvoucherclaim.js"
import Salesvouchermasters from "../apps/sales/voucher/vouchermasters/Salesvouchermasters.js"

//Suppliers
import Purchaseorg from "../apps/purchase/orgstructure/purchaseorg/Purchaseorg.js"
import Buyergroups from "../apps/purchase/orgstructure/buyergroups/Buyergroups.js"
import Buyerpersons from "../apps/purchase/orgstructure/buyerpersons/Buyerpersons.js"
import Procurementcommittee from "../apps/purchase/orgstructure/procurementcommittee/Procurementcommittee.js"
import Purchaseproducts from "../apps/purchase/masterdata/products/Purchaseproducts.js"
import Purchasecatalogs from "../apps/purchase/masterdata/catalogs/Purchasecatalogs.js"
import Purchasepricing from "../apps/purchase/masterdata/pricing/Purchasepricing.js"
import Vendorlist from "../apps/purchase/masterdata/billofmaterials/Vendorlist.js"
import Purchasebom from "../apps/purchase/masterdata/billofmaterials/Purchasebom.js"
import Purchasebatches from "../apps/purchase/masterdata/batches/Purchasebatches.js"
import Purchaseserialnumber from "../apps/purchase/masterdata/serialnumbers/Purchaseserialnumber.js"
import Purchaseequipments from "../apps/purchase/masterdata/equipments/Purchaseequipments.js"
import Purchasewarranty from "../apps/purchase/masterdata/warranty/Purchasewarranty.js"
import Purchasestandardterms from "../apps/purchase/masterdata/standardterms/Purchasestandardterms.js"
import Purchaseplan from "../apps/purchase/planbudget/purchaseplanning/Purchaseplan.js"
import Purchasetarget from "../apps/purchase/planbudget/purchasetarget/Purchasetarget.js"
import Purchasebudget from "../apps/purchase/planbudget/purchasebudget/Purchasebudget.js"
import Purchasekpi from "../apps/purchase/planbudget/purchasekpi/Purchasekpi.js"
import purchasevouchermasters from "../apps/purchase/voucher/vouchermasters/purchasevouchermasters.js"
import Purchasevoucherclaim from "../apps/purchase/voucher/voucherclaim/Purchasevoucherclaim.js"
import Vendorleads from "../apps/purchase/businesspartner/vendorleads/Vendorleads.js"
import Purchasecontacts from "../apps/purchase/businesspartner/contacts/Purchasecontacts.js"
import Vendormasters from "../apps/purchase/businesspartner/vendormasters/Vendormasters.js"
import Purchaseservicepartners from "../apps/purchase/businesspartner/servicepartners/Purchaseservicepartners.js"
import Purchaseactivities from "../apps/purchase/activitytracker/activities/Purchaseactivities.js"
import Purchasetasks from "../apps/purchase/activitytracker/tasks/Purchasetasks.js"
import Purchaserequisitions from "../apps/purchase/requisition/purchaserequisitions/Purchaserequisitions.js"
import Purchaseselectioncriteria from "../apps/purchase/selectionrule/criteria/Purchaseselectioncriteria.js"
import Purchasecriteriamethod from "../apps/purchase/selectionrule/method/Purchasecriteriamethod.js"
import Purchaseselfservice from "../apps/purchase/sourcing/selfservicepurchase/Purchaseselfservice.js"
import Purchaserequestforquotations from "../apps/purchase/sourcing/requestforquotations/Purchaserequestforquotations.js"
import Purchaserequestforproposals from "../apps/purchase/sourcing/requestforproposals/Purchaserequestforproposals.js"
import Purchasetenders from "../apps/purchase/sourcing/purchasetenders/Purchasetenders.js"
import Purchaseorders from "../apps/purchase/purchase/purchaseorders/Purchaseorders.js"
import Purchasecontracts from "../apps/purchase/purchase/contracts/Purchasecontracts.js"
import Purchasedeliveryorders from "../apps/purchase/delivery/deliveryoprders/Purchasedeliveryorders.js"
import Purchaseshipment from "../apps/purchase/delivery/shipment/Purchaseshipment.js"
import Purchasedeliverytracking from "../apps/purchase/delivery/deliverytracking/Purchasedeliverytracking.js"
import Purchasevendorinvoice from "../apps/purchase/invoice/vendorinvoice/Purchasevendorinvoice.js"
import Purchasevendorinvoicestatus from "../apps/purchase/invoice/invoicestatus/Purchasevendorinvoicestatus.js"
import Purchaseservicecases from "../apps/purchase/servicecase/cases/Purchaseservicecases.js"
import Purchaseservicerequest from "../apps/purchase/servicecase/servicerequest/Purchaseservicerequest.js"
import Purchasewarrantyclaim from "../apps/purchase/servicecase/warrantyclaim/Purchasewarrantyclaim.js"
import Purchaseserviceorders from "../apps/purchase/servicecase/serviceorders/Purchaseserviceorders.js"
import Purchaseserviceconfirmation from "../apps/purchase/servicecase/confirmations/Purchaseserviceconfirmation.js"
import Purchasemembership from "../apps/purchase/loyalty/membership/Purchasemembership.js"
import Purchasekpireport from "../apps/purchase/srmreport/kpireport/Purchasekpireport.js"
import Purchasereport from "../apps/purchase/srmreport/purchasereport/Purchasereport.js"
import Purchasedeliveryreport from "../apps/purchase/srmreport/deliveryreport/Purchasedeliveryreport.js"
import Purchaseinventoryreport from "../apps/purchase/srmreport/inventoryreport/Purchaseinventoryreport.js"
import Purchaseinvoicereport from "../apps/purchase/srmreport/invoicereport/Purchaseinvoicereport.js"
import Purchasevendorreport from "../apps/purchase/srmreport/vendorreport/Purchasevendorreport.js"
import Purchaseproductreport from "../apps/purchase/srmreport/productreport/Purchaseproductreport.js"

//Warehouse
import Warehouselocation from "../apps/warehouse/orgstructure/warehouselocation/Warehouselocation.js"
import Warehousenumber from "../apps/warehouse/orgstructure/warehousenumber/Warehousenumber.js"
import Warehousezone from "../apps/warehouse/design/warehousezone/Warehousezone.js"
import Warehouseaisle from "../apps/warehouse/design/warehouseaisle/Warehouseaisle.js"
import Warehouserack from "../apps/warehouse/design/warehouserack/Warehouserack.js"
import Warehouselevel from "../apps/warehouse/design/warehouselevel/Warehouselevel.js"
import Warehousebin from "../apps/warehouse/design/warehousebin/Warehousebin.js"
import Warehousedesigner from "../apps/warehouse/design/warehousedesigner/Warehousedesigner.js"
import Warehouseproducts from "../apps/warehouse/masterdata/products/Warehouseproducts.js"
import Warehousebom from "../apps/warehouse/masterdata/billofmaterials/Warehousebom.js"
import Warehousebatches from "../apps/warehouse/masterdata/batches/Warehousebatches.js"
import Warehouseserialnumber from "../apps/warehouse/masterdata/serialnumbers/Warehouseserialnumber.js"
import Warehouseequipments from "../apps/warehouse/masterdata/equipments/Warehouseequipments.js"
import Warehousepurchaserequisition from "../apps/warehouse/requisition/purchaserequisition/Warehousepurchaserequisition.js"
import Materialrequirementplanning from "../apps/warehouse/requisition/materialreqplanning/Materialrequirementplanning.js"
import Transferreservation from "../apps/warehouse/requisition/transfereservation/Transferreservation.js"
import Outboundreservation from "../apps/warehouse/requisition/outboundreservation/Outboundreservation.js"
import Committoreserved from "../apps/warehouse/requisition/committoreserved/Committoreserved.js"
import Stockonhand from "../apps/warehouse/inventory/onhandstock/Stockonhand.js"
import Stockvmi from "../apps/warehouse/inventory/vendormanageinventory/Stockvmi.js"
import Stockconsignment from "../apps/warehouse/inventory/consignmentstock/Stockconsignment.js"
import Stockcustomer from "../apps/warehouse/inventory/customerstock/Stockcustomer.js"
import Proposalofdelivery from "../apps/warehouse/goodsmovement/proposalofdelivery/Proposalofdelivery.js"
import Goodsreceipt from "../apps/warehouse/goodsmovement/goodsreceipt/Goodsreceipt.js"
import Goodsissue from "../apps/warehouse/goodsmovement/goodsissue/Goodsissue.js"
import Proofofdelivery from "../apps/warehouse/goodsmovement/proofofdelivery/Proofofdelivery.js"
import Stocktransfer from "../apps/warehouse/goodsmovement/stocktransfer/Stocktransfer.js"
import Qualityinspection from "../apps/warehouse/goodsmovement/qualityinspection/Qualityinspection.js"
import Putaway from "../apps/warehouse/goodsmovement/putaway/Putaway.js"
import Picking from "../apps/warehouse/goodsmovement/picking/Picking.js"
import Packing from "../apps/warehouse/goodsmovement/packing/Packing.js"
import Repacking from "../apps/warehouse/goodsmovement/repacking/Repacking.js"
import Labeling from "../apps/warehouse/goodsmovement/labeling/Labeling.js"
import Relabeling from "../apps/warehouse/goodsmovement/relabeliing/Relabeling.js"
import Loading from "../apps/warehouse/goodsmovement/loading/Loading.js"
import Unloading from "../apps/warehouse/goodsmovement/unloading/Unloading.js"
import Stocktaking from "../apps/warehouse/goodsmovement/stocktaking/Stocktaking.js"
import Stockadjustment from "../apps/warehouse/goodsmovement/stockadjustment/Stockadjustment.js"
import Stockreturn from "../apps/warehouse/goodsmovement/stockreturn/Stockreturn.js"
import Goodscanceltransactions from "../apps/warehouse/goodsmovement/canceltransactions/Goodscanceltransactions.js"
import Proposalofacceptance from "../apps/warehouse/servicetransactions/proposalofacceptance/Proposalofacceptance.js"
import Serviceacceptance from "../apps/warehouse/servicetransactions/serviceacceptance/Serviceacceptance.js"
import Serviceinspection from "../apps/warehouse/servicetransactions/serviceinspection/Serviceinspection.js"
import Proofofservice from "../apps/warehouse/servicetransactions/proofofservice/Proofofservice.js"
import Servicecanceltransactions from "../apps/warehouse/servicetransactions/canceltransactions/Servicecanceltransactions.js"
import Warehousekpireport from "../apps/warehouse/wmsreport/kpireport/Warehousekpireport.js"
import Fulfillmentreport from "../apps/warehouse/wmsreport/fulfillmentreport/Fulfillmentreport.js"
import Inventoryreport from "../apps/warehouse/wmsreport/inventoryreport/Inventoryreport.js"
import Goodsmovementreport from "../apps/warehouse/wmsreport/goodsmovementreport/Goodsmovementreport.js"
import Servicereport from "../apps/warehouse/wmsreport/servicereport/Servicereport.js"
import Warehouseproductreport from "../apps/warehouse/wmsreport/productreport/Warehouseproductreport.js"

//OneView
import ViewLayoutTemplate from "../apps/oneview/viewlayout/template/ViewLayoutTemplate.js"
import ViewLayoutAssignment from "../apps/oneview/viewlayout/assignment/ViewLayoutAssignment.js"
import Announcement from "../apps/oneview/announcement/announcement/Announcement.js"
import Survey from "../apps/oneview/survey/survey/Survey.js"
import Quickpoll from "../apps/oneview/survey/quickpoll/Quickpoll.js"

//Settings
import BasicData from "../apps/settings/accountsetting/basicdata/BasicData.js"
import ProfileSetting from "../apps/settings/accountsetting/profilesetting/ProfileSetting.js"
import DigitalSignature from "../apps/settings/digitalsignature/signaturesetting/SignatureSetting.js"

//Administration
import Tenantid from "../apps/administration/orgsystems/tenantid/Tenantid.js"
import Systemid from "../apps/administration/orgsystems/systemid/Systemid.js"
import Organizationid from "../apps/administration/orgsystems/organizationid/Organizationid.js"
import Organizationiddetail from "../apps/administration/orgsystems/organizationid/Organizationiddetail.js"
import Applications from "../apps/administration/applications/applications/Applications.js"
import Appsmarket from "../apps/administration/applications/appsmarket/Appsmarket.js"
import Resources from "../apps/administration/applications/resources/Resources.js"
import Utilities from "../apps/administration/applications/utilities/Utilities.js"
import Subscriptions from "../apps/administration/subscriptions/licensesubsciptions/Subscriptions.js"
import Subscriptionsdetail from "../apps/administration/subscriptions/licensesubsciptions/Subscriptionsdetail.js"
import Licenses from "../apps/administration/subscriptions/licenses/Licenses.js"
import Licensesdetail from "../apps/administration/subscriptions/licenses/Licensesdetail.js"
import Paymentmethod from "../apps/administration/subscriptions/paymentmethod/Paymentmethod.js"
import Subscriptionbilling from "../apps/administration/subscriptions/invoices/Subscriptionbilling.js"
import Subscriptioninvoices from "../apps/administration/subscriptions/invoices/Subscriptioninvoices.js"
import Subscriptioninvoicesdetail from "../apps/administration/subscriptions/invoices/Subscriptioninvoicesdetail.js"
import Usersadministration from "../apps/administration/usergroups/users/Usersadministration.js"
import Usergroupsadministration from "../apps/administration/usergroups/usergroups/Usergroupsadministration.js"
import Authorizationroles from "../apps/administration/usergroups/authorizationroles/Authorizationroles.js"
import Authentication from "../apps/administration/security/authentication/Authentication.js"
import Alertcenter from "../apps/administration/security/alertcenter/Alertcenter.js"
import Apicontrols from "../apps/administration/security/apicontrols/Apicontrols.js"


//Configuration
import ConfigCompany from "../apps/configuration/company/company/ConfigCompany.js"
import ConfigPlant from "../apps/configuration/company/plant/ConfigPlant.js"
import ConfigLayoutDesigner from "../apps/configuration/design/layoutdesigner/ConfigLayoutDesigner.js"
import ConfigWarehouseAisle from "../apps/configuration/design/warehouseaisle/ConfigWarehouseAisle.js"
import ConfigWarehouseBin from "../apps/configuration/design/warehousebin/ConfigWarehouseBin.js"
import ConfigWarehouseLevel from "../apps/configuration/design/warehouselevel/ConfigWarehouseLevel.js"
import ConfigWarehouseRack from "../apps/configuration/design/warehouserack/ConfigWarehouseRack.js"
import ConfigWarehouseZone from "../apps/configuration/design/warehousezone/ConfigWarehouseZone.js"
import ConfigGeneralSettings from "../apps/configuration/general/generalsettings/ConfigGeneralSettings.js"
import ConfigMenuSettings from "../apps/configuration/general/menusettings/ConfigMenuSettings.js"
import ConfigUserSettings from "../apps/configuration/general/usersettings/ConfigUserSettings.js"
import ConfigBatches from "../apps/configuration/masterdata/batches/ConfigBatches.js"
import ConfigBom from "../apps/configuration/masterdata/billofmaterial/ConfigBom.js"
import ConfigCatalogs from "../apps/configuration/masterdata/catalogs/ConfigCatalogs.js"
import ConfigEquipments from "../apps/configuration/masterdata/equipments/ConfigEquipments.js"
import ConfigFleets from "../apps/configuration/masterdata/fleets/ConfigFleets.js"
import ConfigPricing from "../apps/configuration/masterdata/pricing/ConfigPricing.js"
import ConfigProducts from "../apps/configuration/masterdata/products/ConfigProducts.js"
import ConfigSerialNumber from "../apps/configuration/masterdata/serialnumber/ConfigSerialNumber.js"
import ConfigStandardTerms from "../apps/configuration/masterdata/standardterms/ConfigStandardTerms.js"
import ConfigTechnicians from "../apps/configuration/masterdata/technicians/ConfigTechnicians.js"
import ConfigVendorList from "../apps/configuration/masterdata/vendorlist/ConfigVendorList.js"
import ConfigWarranty from "../apps/configuration/masterdata/warranty/ConfigWarranty.js"
import ConfigWorkCenters from "../apps/configuration/masterdata/workcenters/ConfigWorkCenters.js"
import ConfigSalesOrg from "../apps/configuration/orgstructure/salesorg/ConfigSalesOrg.js"
import ConfigSalesChannels from "../apps/configuration/orgstructure/saleschannels/ConfigSalesChannels.js"
import ConfigSalesDivisions from "../apps/configuration/orgstructure/salesdivisions/ConfigSalesDivisions.js"
import ConfigSalesOffices from "../apps/configuration/orgstructure/salesoffices/ConfigSalesOffices.js"
import ConfigSalesGroups from "../apps/configuration/orgstructure/salesgroups/ConfigSalesGroups.js"
import ConfigSalesPersons from "../apps/configuration/orgstructure/salespersons/ConfigSalesPersons.js"
import ConfigTerritories from "../apps/configuration/orgstructure/territories/ConfigTerritories.js"
import ConfigTerritoryScopes from "../apps/configuration/orgstructure/territoryscopes/ConfigTerritoryScopes.js"
import ConfigPurchaseOrg from "../apps/configuration/orgstructure/purchaseorg/ConfigPurchaseOrg.js"
import ConfigBuyerGroups from "../apps/configuration/orgstructure/buyergroups/ConfigBuyerGroups.js"
import ConfigBuyerPersons from "../apps/configuration/orgstructure/buyerpersons/ConfigBuyerPersons.js"
import ConfigProcurementCommittee from "../apps/configuration/orgstructure/procurementcommittee/ConfigProcurementCommittee.js"
import ConfigWarehouseLocation from "../apps/configuration/orgstructure/warehouselocation/ConfigWarehouseLocation.js"
import ConfigWarehouseNumber from "../apps/configuration/orgstructure/warehousenumber/ConfigWarehouseNumber.js"

import CustomFormBuilder from "../apps/configuration/formbuilder/customization/CustomFormBuilder.js"
import ConfigFormBuilder from "../apps/configuration/formbuilder/formbuilder/ConfigFormBuilder.js"
import CustomIntegration from "../apps/configuration/integration/customization/CustomIntegration.js"
import ConfigIntegration from "../apps/configuration/integration/integration/ConfigIntegration.js"
import CustomMailTemplate from "../apps/configuration/mailtemplate/customization/CustomMailTemplate.js"
import ConfigMailTemplate from "../apps/configuration/mailtemplate/mailtemplate/ConfigMailTemplate.js"
// import CustomMailTemplate from "../apps/configuration/mailtemplate/customization/CustomMailTemplate.js"
// import ConfigMailTemplate from "../apps/configuration/mailtemplate/mailtemplate/ConfigMailTemplate.js"
import CustomPortalDesigner from "../apps/configuration/portaldesigner/customization/CustomPortalDesigner.js"
import ConfigPortalDesigner from "../apps/configuration/portaldesigner/portaldesigner/ConfigPortalDesigner.js"
import CustomPrintoutPainter from "../apps/configuration/printoutpainter/customization/CustomPrintoutPainter.js"
import ConfigPrintoutPainter from "../apps/configuration/printoutpainter/printoutpainter/ConfigPrintoutPainter.js"
import CustomProcessBuilder from "../apps/configuration/processbuilder/customization/CustomProcessBuilder.js"
import ConfigProcessBuilder from "../apps/configuration/processbuilder/processbuilder/ConfigProcessBuilder.js"
import CustomReportPainter from "../apps/configuration/reportpainter/customization/CustomReportPainter.js"
import ConfigReportPainter from "../apps/configuration/reportpainter/reportpainter/ConfigReportPainter.js"
import CustomSubstitution from "../apps/configuration/substitution/customization/CustomSubstitution.js"
import ConfigSubstitution from "../apps/configuration/substitution/substitution/ConfigSubstitution.js"
import CustomValidation from "../apps/configuration/validation/customization/CustomValidation.js"
import ConfigValidation from "../apps/configuration/validation/validation/ConfigValidation.js"
import CustomWorkflowBuilder from "../apps/configuration/workflowbuilder/customization/CustomWorkflowBuilder.js"
import ConfigWorkflowBuilder from "../apps/configuration/workflowbuilder/workflowbuilder/ConfigWorkflowBuilder.js"

// Pages
import Pricing from "../pages/Pricing.js";
import Faq from "../pages/Faq.js";
import Profile from "../pages/Profile.js";
import People from "../pages/People.js";
import Activity from "../pages/Activity.js";
import Events from "../apps/networks/businessevents/BusinessEvents.js";
import Settings from "../pages/Settings.js";

// UI Elements
import LayoutColumns from "../docs/LayoutColumns.js";
import LayoutGrid from "../docs/LayoutGrid.js";
import LayoutGutters from "../docs/LayoutGutters.js";
import Accordions from "../docs/Accordions.js";
import Alerts from "../docs/Alerts.js";
import Avatars from "../docs/Avatars.js";
import Badges from "../docs/Badges.js";
import Breadcrumbs from "../docs/Breadcrumbs.js";
import Buttons from "../docs/Buttons.js";
import Cards from "../docs/Cards.js";
import Carousels from "../docs/Carousels.js";
import Dropdowns from "../docs/Dropdowns.js";
import Images from "../docs/Images.js";
import Listgroup from "../docs/Listgroup.js";
import Markers from "../docs/Markers.js";
import Modals from "../docs/Modals.js";
import NavTabs from "../docs/NavTabs.js";
import OffCanvas from "../docs/OffCanvas.js";
import Paginations from "../docs/Paginations.js";
import Placeholders from "../docs/Placeholders.js";
import Popovers from "../docs/Popovers.js";
import Progress from "../docs/Progress.js";
import Spinners from "../docs/Spinners.js";
import Toasts from "../docs/Toasts.js";
import Tooltips from "../docs/Tooltips.js";
import Tables from "../docs/Tables.js";
import FormElements from "../docs/FormElements.js";
import FormSelects from "../docs/FormSelects.js";
import FormChecksRadios from "../docs/FormChecksRadios.js";
import FormRange from "../docs/FormRange.js";
import FormPickers from "../docs/FormPickers.js";
import FormLayouts from "../docs/FormLayouts.js";
import UtilBackground from "../docs/UtilBackground.js";
import UtilBorder from "../docs/UtilBorder.js";
import UtilColors from "../docs/UtilColors.js";
import UtilDivider from "../docs/UtilDivider.js";
import UtilFlex from "../docs/UtilFlex.js";
import UtilSizing from "../docs/UtilSizing.js";
import UtilSpacing from "../docs/UtilSpacing.js";
import UtilOpacity from "../docs/UtilOpacity.js";
import UtilPosition from "../docs/UtilPosition.js";
import UtilTypography from "../docs/UtilTypography.js";
import UtilShadows from "../docs/UtilShadows.js";
import UtilExtras from "../docs/UtilExtras.js";
import ApexCharts from "../docs/ApexCharts.js";
import ChartJs from "../docs/ChartJs.js";
import MapLeaflet from "../docs/MapLeaflet.js";
import MapVector from "../docs/MapVector.js";
import IconRemix from "../docs/IconRemix.js";
import IconFeather from "../docs/IconFeather.js";



import Salescatalogsdetail from "../apps/sales/masterdata/catalogs/Salescatalogsdetail.js";
import Salescatalogscreate from "../apps/sales/masterdata/catalogs/Salescatalogscreate.js";
import Salesproductscreate from "../apps/sales/masterdata/products/Salesproductscreate.js";
import Salesproductschange from "../apps/sales/masterdata/products/Salesproductschange.js";
import Salescatalogschange from "../apps/sales/masterdata/catalogs/Salescatalogschange.js";
import Salesbomcreate from "../apps/sales/masterdata/billofmaterials/Salesbomcreate.js";
import Salesbomdetail from "../apps/sales/masterdata/billofmaterials/Salesbomdetail.js";
import Salesbomchange from "../apps/sales/masterdata/billofmaterials/Salesbomchange.js";
import Opportunitiescreate from "../apps/sales/presales/opportunities/Opportunitiescreate.js";
import Opportunitiesdetail from "../apps/sales/presales/opportunities/Opportunitiesdetail.js";
import Opportunitieschange from "../apps/sales/presales/opportunities/Opportunitieschange.js";
import Salesquotationscreate from "../apps/sales/presales/quotations/Salesquotationscreate.js";
import Salesquotationsdetail from "../apps/sales/presales/quotations/Salesquotationsdetail.js";
import Salesquotationschange from "../apps/sales/presales/quotations/Salesquotationschange.js";
import Salesdeliveryorderscreate from "../apps/sales/delivery/deliveryorders/Salesdeliveryorderscreate.js";

const protectedRoutes = [
  { path: "dashboard/finance", element: <FinanceMonitoring /> },
  { path: "dashboard/events", element: <EventManagement /> },
  { path: "dashboard/sales", element: <SalesMonitoring /> },
  { path: "dashboard/analytics", element: <WebsiteAnalytics /> },
  { path: "dashboard/crypto", element: <Cryptocurrency /> },
  { path: "dashboard/helpdesk", element: <HelpdeskService /> },
  { path: "dashboard/storage", element: <StorageManagement /> },
  { path: "dashboard/product", element: <ProductManagement /> },
  { path: "apps/gallery-music", element: <GalleryMusic /> },
  { path: "apps/gallery-video", element: <GalleryVideo /> },
  { path: "apps/tasks/tasks", element: <Tasks /> },
  { path: "apps/tasks/calendar", element: <AppCalendar /> },
  { path: "apps/networks/contacts", element: <Contacts /> },
  { path: "apps/networks/connections", element: <Connections /> },
  { path: "apps/networks/businesspartners", element: <Businesspartners /> },
  { path: "apps/networks/groups", element: <Groups /> },
  { path: "apps/networks/events", element: <Events /> },
  { path: "apps/portal/companywebsite", element: <CompanyWebsite /> },
  { path: "apps/portal/customerportal", element: <CustomerPortal /> },
  { path: "apps/portal/vendorportal", element: <VendorPortal /> },

  { path: "apps/home/myview", element: <Myview /> },
  
  //Customers
  { path : "apps/sales/activitytracker/activities", element:<Salesactivities/> },
  { path : "apps/sales/activitytracker/salesvisits", element:<Salesvisits/> },
  { path : "apps/sales/activitytracker/tasks", element:<Salestasks/> },
  { path : "apps/sales/aftersales/cases", element:<Salescases/> },
  { path : "apps/sales/aftersales/confirmations", element:<Salesserviceconfirmations/> },
  { path : "apps/sales/aftersales/dispatching", element:<Salesservicedispatching/> },
  { path : "apps/sales/aftersales/serviceorders", element:<Salesserviceorders/> },
  { path : "apps/sales/aftersales/servicerequest", element:<Servicerequest/> },
  { path : "apps/sales/aftersales/settlement", element:<Serviceordersettlement/> },
  { path : "apps/sales/aftersales/warrantyclaim", element:<Saleswarrantyclaim/> },
  { path : "apps/sales/billing/billingcollection", element:<Salesbillingcollection/> },
  { path : "apps/sales/billing/customerbilling", element:<Salesbillings/> },
  { path : "apps/sales/businesspartner/contacts", element:<Salescontacts/> },
  { path : "apps/sales/businesspartner/customermasters", element:<Customermasters/> },
  { path : "apps/sales/businesspartner/leads", element:<Leads/> },
  { path : "apps/sales/businesspartner/servicepartners", element:<Salesservicepartners/> },
  { path : "apps/sales/campaign/campaigns", element:<Salescampaign/> },
  { path : "apps/sales/campaign/events", element:<Customerevents/> },
  { path : "apps/sales/campaign/events", element:<Salesevents/> },
  { path : "apps/sales/crmreport/billingreport", element:<Salesbillingreport/> },
  { path : "apps/sales/crmreport/customerreport", element:<Salescustomerreport/> },
  { path : "apps/sales/crmreport/deliveryreport", element:<Salesdeliveryreport/> },
  { path : "apps/sales/crmreport/inventoryreport", element:<Salesinventoryreport/> },
  { path : "apps/sales/crmreport/kpireport", element:<Saleskpireport/> },
  { path : "apps/sales/crmreport/productreport", element:<Salesproductreport/> },
  { path : "apps/sales/crmreport/salesreport", element:<Salesreport/> },
  { path : "apps/sales/delivery/deliveryorders", element:<Salesdeliveryorders/> },
  { path : "apps/sales/delivery/deliveryorders/salesdeliveryorderscreate", element:<Salesdeliveryorderscreate/> },
  { path : "apps/sales/delivery/deliverytracking", element:<Salesdeliverytracking/> },
  { path : "apps/sales/delivery/shipment", element:<Salesshipment/> },
  { path : "apps/sales/loyalty/loyaltyprograms", element:<Salesloyaltyprograms/> },
  { path : "apps/sales/loyalty/memberships", element:<Salesmembership/> },
  { path : "apps/sales/loyalty/rewardcatalogs", element:<Salesrewardcatalogs/> },
  { path : "apps/sales/masterdata/batches", element:<Salesbatches/> },
  { path : "apps/sales/masterdata/billofmaterials", element:<Salesbom/> },
  { path : "apps/sales/masterdata/billofmaterials/salesbomcreate", element:<Salesbomcreate/> },
  { path : "apps/sales/masterdata/billofmaterials/salesbomdetail", element:<Salesbomdetail/> },
  { path : "apps/sales/masterdata/billofmaterials/salesbomchange", element:<Salesbomchange/> },
  { path : "apps/sales/masterdata/catalogs", element:<Salescatalogs/> },
  { path : "apps/sales/masterdata/catalogs/salescatalogsdetail", element:<Salescatalogsdetail/> },
  { path : "apps/sales/masterdata/catalogs/salescatalogscreate", element:<Salescatalogscreate/> },
  { path : "apps/sales/masterdata/catalogs/salescatalogschange", element:<Salescatalogschange/> },
  { path : "apps/sales/masterdata/equipments", element:<Salesequipments/> },
  { path : "apps/sales/masterdata/fleets", element:<Salesfleets/> },
  { path : "apps/sales/masterdata/pricing", element:<Salespricing/> },
  { path : "apps/sales/masterdata/pricing/salespricingcreate", element:<Salespricingcreate/> },
  { path : "apps/sales/masterdata/pricing/salespricingdetail", element:<Salespricingdetail/> },
  { path : "apps/sales/masterdata/pricing/salespricingchange", element:<Salespricingchange/> },
  { path : "apps/sales/masterdata/products", element:<Salesproducts/> },
  { path : "apps/sales/masterdata/products/salesproductsdetail/:id", element:<Salesproductsdetail/> },
  { path : "apps/sales/masterdata/products/salesproductscreate", element:<Salesproductscreate/> },
  { path : "apps/sales/masterdata/products/salesproductschange/:id", element:<Salesproductschange/> },
  { path : "apps/sales/masterdata/serialnumbers", element:<Salesserialnumbers/> },
  { path : "apps/sales/masterdata/standardterms", element:<Salesstandardterms/> },
  { path : "apps/sales/masterdata/technicians", element:<Salestechnicians/> },
  { path : "apps/sales/masterdata/warranty", element:<Saleswarranty/> },
  { path : "apps/sales/masterdata/workcenters", element:<Salesworkcenters/> },
  { path : "apps/sales/orgstructure/saleschannels", element:<Saleschannel/> },
  { path : "apps/sales/orgstructure/salesdivisions", element:<Salesdivisions/> },
  { path : "apps/sales/orgstructure/salesgroups", element:<Salesgroups/> },
  { path : "apps/sales/orgstructure/salesoffices", element:<Salesoffices/> },
  { path : "apps/sales/orgstructure/salesorg", element:<Salesorg/> },
  { path : "apps/sales/orgstructure/salespersons", element:<Salespersons/> },
  { path : "apps/sales/orgstructure/territories", element:<Territories/> },
  { path : "apps/sales/orgstructure/territoryscopes", element:<Territoryscopes/> },
  { path : "apps/sales/planbudget/discountbudget", element:<Salesdiscountbudget/> },
  { path : "apps/sales/planbudget/revenueplanning", element:<Salesrevenueplan/> },
  { path : "apps/sales/planbudget/salescommission", element:<Salescommission/> },
  { path : "apps/sales/planbudget/saleskpi", element:<Saleskpi/> },
  { path : "apps/sales/planbudget/salestarget", element:<Salestarget/> },
  { path : "apps/sales/presales/opportunities", element:<Opportunities/> },
  { path : "apps/sales/presales/opportunities/salesopportunitiescreate", element:<Opportunitiescreate/> },
  { path : "apps/sales/presales/opportunities/salesopportunitiesdetail", element:<Opportunitiesdetail/> },
  { path : "apps/sales/presales/opportunities/salesopportunitieschange", element:<Opportunitieschange/> },
  { path : "apps/sales/presales/proposals", element:<Salesproposals/> },
  { path : "apps/sales/presales/quotations", element:<Salesquotations/> },
  { path : "apps/sales/presales/quotations/salesquotationscreate", element:<Salesquotationscreate/> },
  { path : "apps/sales/presales/quotations/salesquotationsdetail", element:<Salesquotationsdetail/> },
  { path : "apps/sales/presales/quotations/salesquotationschange", element:<Salesquotationschange/> },
  { path : "apps/sales/presales/tenders", element:<Salestenders/> },
  { path : "apps/sales/sales/contracts", element:<Salescontracts/> },
  { path : "apps/sales/sales/recurringsalesorders", element:<Salesrecurring/> },
  { path : "apps/sales/sales/salesorders", element:<Salesorders/> },
  { path : "apps/sales/voucher/voucherclaim", element:<Salesvoucherclaim/> },
  { path : "apps/sales/voucher/vouchermasters", element:<Salesvouchermasters/> },

  //Suppliers
  { path: "apps/purchase/orgstructure/purchaseorg" , element:<Purchaseorg/> },
  { path: "apps/purchase/orgstructure/buyergroups" , element:<Buyergroups/> },
  { path: "apps/purchase/orgstructure/buyerpersons" , element:<Buyerpersons/> },
  { path: "apps/purchase/orgstructure/procurementcommittee" , element:<Procurementcommittee/> },
  { path: "apps/purchase/masterdata/products" , element:<Purchaseproducts/> },
  { path: "apps/purchase/masterdata/catalogs" , element:<Purchasecatalogs/> },
  { path: "apps/purchase/masterdata/pricing" , element:<Purchasepricing/> },
  { path: "apps/purchase/masterdata/vendorlist" , element:<Vendorlist/> },
  { path: "apps/purchase/masterdata/bom" , element:<Purchasebom/> },
  { path: "apps/purchase/masterdata/batches" , element:<Purchasebatches/> },
  { path: "apps/purchase/masterdata/serialnumber" , element:<Purchaseserialnumber/> },
  { path: "apps/purchase/masterdata/equipments" , element:<Purchaseequipments/> },
  { path: "apps/purchase/masterdata/warranty" , element:<Purchasewarranty/> },
  { path: "apps/purchase/masterdata/standardterms" , element:<Purchasestandardterms/> },
  { path: "apps/purchase/planbudget/purchaseplan" , element:<Purchaseplan/> },
  { path: "apps/purchase/planbudget/purchasetarget" , element:<Purchasetarget/> },
  { path: "apps/purchase/planbudget/purchasebudget" , element:<Purchasebudget/> },
  { path: "apps/purchase/planbudget/purchasekpi" , element:<Purchasekpi/> },
  { path: "apps/purchase/voucher/vouchermasters" , element:<purchasevouchermasters/> },
  { path: "apps/purchase/voucher/voucherclaim" , element:<Purchasevoucherclaim/> },
  { path: "apps/purchase/businesspartner/vendorleads" , element:<Vendorleads/> },
  { path: "apps/purchase/businesspartner/contacts" , element:<Purchasecontacts/> },
  { path: "apps/purchase/businesspartner/vendormasters" , element:<Vendormasters/> },
  { path: "apps/purchase/businesspartner/servicepartners" , element:<Purchaseservicepartners/> },
  { path: "apps/purchase/activitytracker/activities" , element:<Purchaseactivities/> },
  { path: "apps/purchase/activitytracker/tasks" , element:<Purchasetasks/> },
  { path: "apps/purchase/requisition/purchaserequisitions" , element:<Purchaserequisitions/> },
  { path: "apps/purchase/selectionrule/criteria" , element:<Purchaseselectioncriteria/> },
  { path: "apps/purchase/selectionrule/method" , element:<Purchasecriteriamethod/> },
  { path: "apps/purchase/sourcing/selfservice" , element:<Purchaseselfservice/> },
  { path: "apps/purchase/sourcing/requestforquotations" , element:<Purchaserequestforquotations/> },
  { path: "apps/purchase/sourcing/requestforproposals" , element:<Purchaserequestforproposals/> },
  { path: "apps/purchase/sourcing/tenders" , element:<Purchasetenders/> },
  { path: "apps/purchase/purchase/purchaseorders" , element:<Purchaseorders/> },
  { path: "apps/purchase/purchase/contracts" , element:<Purchasecontracts/> },
  { path: "apps/purchase/delivery/deliveryorders" , element:<Purchasedeliveryorders/> },
  { path: "apps/purchase/delivery/shipment" , element:<Purchaseshipment/> },
  { path: "apps/purchase/delivery/deliverytracking" , element:<Purchasedeliverytracking/> },
  { path: "apps/purchase/invoice/vendorinvoice" , element:<Purchasevendorinvoice/> },
  { path: "apps/purchase/invoice/invoicestatus" , element:<Purchasevendorinvoicestatus/> },
  { path: "apps/purchase/servicecase/cases" , element:<Purchaseservicecases/> },
  { path: "apps/purchase/servicecase/servicerequest" , element:<Purchaseservicerequest/> },
  { path: "apps/purchase/servicecase/warrantyclaim" , element:<Purchasewarrantyclaim/> },
  { path: "apps/purchase/servicecase/seserviceorders" , element:<Purchaseserviceorders/> },
  { path: "apps/purchase/servicecase/confirmation" , element:<Purchaseserviceconfirmation/> },
  { path: "apps/purchase/loyalty/membership" , element:<Purchasemembership/> },
  { path: "apps/purchase/srmreport/kpireport" , element:<Purchasekpireport/> },
  { path: "apps/purchase/srmreport/purchasereport" , element:<Purchasereport/> },
  { path: "apps/purchase/srmreport/deliveryreport" , element:<Purchasedeliveryreport/> },
  { path: "apps/purchase/srmreport/inventoryreport" , element:<Purchaseinventoryreport/> },
  { path: "apps/purchase/srmreport/invoicereport" , element:<Purchaseinvoicereport/> },
  { path: "apps/purchase/srmreport/vendorreport" , element:<Purchasevendorreport/> },
  { path: "apps/purchase/srmreport/productreport" , element:<Purchaseproductreport/> }, 

  //Warehouse
  { path: "apps/warehouse/orgstructure/warehouselocation" , element:<Warehouselocation/> },
  { path: "apps/warehouse/orgstructure/warehousenumber" , element:<Warehousenumber/> },
  { path: "apps/warehouse/design/warehousezone" , element:<Warehousezone/> },
  { path: "apps/warehouse/design/warehouseaisle" , element:<Warehouseaisle/> },
  { path: "apps/warehouse/design/warehouserack" , element:<Warehouserack/> },
  { path: "apps/warehouse/design/warehouselevel" , element:<Warehouselevel/> },
  { path: "apps/warehouse/design/warehousebin" , element:<Warehousebin/> },
  { path: "apps/warehouse/design/warehousedesigner" , element:<Warehousedesigner/> },
  { path: "apps/warehouse/masterdata/products" , element:<Warehouseproducts/> },
  { path: "apps/warehouse/masterdata/bom" , element:<Warehousebom/> },
  { path: "apps/warehouse/masterdata/batches" , element:<Warehousebatches/> },
  { path: "apps/warehouse/masterdata/serialnumber" , element:<Warehouseserialnumber/> },
  { path: "apps/warehouse/masterdata/equipments" , element:<Warehouseequipments/> },
  { path: "apps/warehouse/requisition/purchaserequisition" , element:<Warehousepurchaserequisition/> },
  { path: "apps/warehouse/requisition/mrp" , element:<Materialrequirementplanning/> },
  { path: "apps/warehouse/requisition/transferreservation" , element:<Transferreservation/> },
  { path: "apps/warehouse/requisition/outboundreservation" , element:<Outboundreservation/> },
  { path: "apps/warehouse/requisition/committoreserved" , element:<Committoreserved/> },
  { path: "apps/warehouse/inventory/stockonhand" , element:<Stockonhand/> },
  { path: "apps/warehouse/inventory/stockvmi" , element:<Stockvmi/> },
  { path: "apps/warehouse/inventory/stockconsignment" , element:<Stockconsignment/> },
  { path: "apps/warehouse/inventory/stockcustomer" , element:<Stockcustomer/> },
  { path: "apps/warehouse/goodsmovement/proposalofdelivery" , element:<Proposalofdelivery/> },
  { path: "apps/warehouse/goodsmovement/goodsreceipt" , element:<Goodsreceipt/> },
  { path: "apps/warehouse/goodsmovement/goodsissue" , element:<Goodsissue/> },
  { path: "apps/warehouse/goodsmovement/proofofdelivery" , element:<Proofofdelivery/> },
  { path: "apps/warehouse/goodsmovement/stocktransfer" , element:<Stocktransfer/> },
  { path: "apps/warehouse/goodsmovement/qualityinspection" , element:<Qualityinspection/> },
  { path: "apps/warehouse/goodsmovement/putaway" , element:<Putaway/> },
  { path: "apps/warehouse/goodsmovement/picking" , element:<Picking/> },
  { path: "apps/warehouse/goodsmovement/packing" , element:<Packing/> },
  { path: "apps/warehouse/goodsmovement/repacking" , element:<Repacking/> },
  { path: "apps/warehouse/goodsmovement/labeling" , element:<Labeling/> },
  { path: "apps/warehouse/goodsmovement/relabeling" , element:<Relabeling/> },
  { path: "apps/warehouse/goodsmovement/loading" , element:<Loading/> },
  { path: "apps/warehouse/goodsmovement/unloading" , element:<Unloading/> },
  { path: "apps/warehouse/goodsmovement/stocktaking" , element:<Stocktaking/> },
  { path: "apps/warehouse/goodsmovement/stockadjustment" , element:<Stockadjustment/> },
  { path: "apps/warehouse/goodsmovement/stockreturn" , element:<Stockreturn/> },
  { path: "apps/warehouse/goodsmovement/goodscanceltransactions" , element:<Goodscanceltransactions/> },
  { path: "apps/warehouse/servicetransactions/proposalofacceptance" , element:<Proposalofacceptance/> },
  { path: "apps/warehouse/servicetransactions/serviceacceptance" , element:<Serviceacceptance/> },
  { path: "apps/warehouse/servicetransactions/serviceinspection" , element:<Serviceinspection/> },
  { path: "apps/warehouse/servicetransactions/proofofservice" , element:<Proofofservice/> },
  { path: "apps/warehouse/servicetransactions/servicecanceltransactions" , element:<Servicecanceltransactions/> },
  { path: "apps/warehouse/wmsreport/warehousekpireport" , element:<Warehousekpireport/> },
  { path: "apps/warehouse/wmsreport/fulfillmentreport" , element:<Fulfillmentreport/> },
  { path: "apps/warehouse/wmsreport/inventoryreport" , element:<Inventoryreport/> },
  { path: "apps/warehouse/wmsreport/goodsmovementreport" , element:<Goodsmovementreport/> },
  { path: "apps/warehouse/wmsreport/servicereport" , element:<Servicereport/> },
  { path: "apps/warehouse/wmsreport/warehouseproductreport" , element:<Warehouseproductreport/> },

  //OneView
  { path: "apps/oneview/viewlayout/template" , element:<ViewLayoutTemplate/> },
  { path: "apps/oneview/viewlayout/assignment" , element:<ViewLayoutAssignment/> },
  { path: "apps/oneview/announcement/announcement" , element:<Announcement/> },
  { path: "apps/oneview/survey/survey" , element:<Survey/> },
  { path: "apps/oneview/survey/quickpoll" , element:<Quickpoll/> },

  //Settings
  { path: "apps/settings/accountsetting/basicdata" , element:<BasicData/> },
  { path: "apps/settings/accountsetting/profilesetting" , element:<ProfileSetting/> },
  { path: "apps/settings/digitalsignature/signaturesetting" , element:<DigitalSignature/> },

  //Administration
  { path: "apps/administration/orgsystems/tenantid" , element:<Tenantid/> },
  { path: "apps/administration/orgsystems/systemid" , element:<Systemid/> },
  { path: "apps/administration/orgsystems/organizationid" , element:<Organizationid/> },
  { path: "apps/administration/orgsystems/organizationiddetail" , element:<Organizationiddetail/> },
  { path: "apps/administration/applications" , element:<Applications/> },
  { path: "apps/administration/appsmarket" , element:<Appsmarket/> },
  { path: "apps/administration/resources" , element:<Resources/> },
  { path: "apps/administration/utilities" , element:<Utilities/> },
  { path: "apps/administration/licenses" , element:<Licenses/> },
  { path: "apps/administration/subscriptions/licensesubsciptions" , element:<Subscriptions/> },
  { path: "apps/administration/subscriptions/subscriptionsdetail" , element:<Subscriptionsdetail/> },
  { path: "apps/administration/subscriptions/licensesdetail" , element:<Licensesdetail/> },
  { path: "apps/administration/subscriptions/paymentmethod" , element:<Paymentmethod/> },
  { path: "apps/administration/subscriptions/subscriptionbilling" , element:<Subscriptionbilling/> },
  { path: "apps/administration/subscriptions/subscriptioninvoices" , element:<Subscriptioninvoices/> },
  { path: "apps/administration/subscriptions/subscriptioninvoicesdetail" , element:<Subscriptioninvoicesdetail/> },
  { path: "apps/administration/usersadministration" , element:<Usersadministration/> },
  { path: "apps/administration/usergroupsadministration" , element:<Usergroupsadministration/> },
  { path: "apps/administration/authorizationroles" , element:<Authorizationroles/> },
  { path: "apps/administration/authentication" , element:<Authentication/> },
  { path: "apps/administration/alertcenter" , element:<Alertcenter/> },
  { path: "apps/administration/apicontrols" , element:<Apicontrols/> },

  //Configuration
  { path: "apps/configuration/company/company" , element:<ConfigCompany/> },
  { path: "apps/configuration/company/plant" , element:<ConfigPlant/> },
  { path: "apps/configuration/design/layoutdesigner" , element:<ConfigLayoutDesigner/> },
  { path: "apps/configuration/design/warehouseaisle" , element:<ConfigWarehouseAisle/> },
  { path: "apps/configuration/design/warehousebin" , element:<ConfigWarehouseBin/> },
  { path: "apps/configuration/design/warehouselevel" , element:<ConfigWarehouseLevel/> },
  { path: "apps/configuration/design/warehouserack" , element:<ConfigWarehouseRack/> },
  { path: "apps/configuration/design/warehousezone" , element:<ConfigWarehouseZone/> },
  { path: "apps/configuration/general/generalsettings" , element:<ConfigGeneralSettings/> },
  { path: "apps/configuration/general/menusettings" , element:<ConfigMenuSettings/> },
  { path: "apps/configuration/general/usersettings" , element:<ConfigUserSettings/> },
  { path: "apps/configuration/masterdata/batches" , element:<ConfigBatches/> },
  { path: "apps/configuration/masterdata/billofmaterial" , element:<ConfigBom/> },
  { path: "apps/configuration/masterdata/catalogs" , element:<ConfigCatalogs/> },
  { path: "apps/configuration/masterdata/equipments" , element:<ConfigEquipments/> },
  { path: "apps/configuration/masterdata/fleets" , element:<ConfigFleets/> },
  { path: "apps/configuration/masterdata/pricing" , element:<ConfigPricing/> },
  { path: "apps/configuration/masterdata/products" , element:<ConfigProducts/> },
  { path: "apps/configuration/masterdata/serialnumber" , element:<ConfigSerialNumber/> },
  { path: "apps/configuration/masterdata/standardterms" , element:<ConfigStandardTerms/> },
  { path: "apps/configuration/masterdata/technicians" , element:<ConfigTechnicians/> },
  { path: "apps/configuration/masterdata/vendorlist" , element:<ConfigVendorList/> },
  { path: "apps/configuration/masterdata/warranty" , element:<ConfigWarranty/> },
  { path: "apps/configuration/masterdata/workcenters" , element:<ConfigWorkCenters/> },

  { path: "apps/configuration/orgstructure/salesorg" , element:<ConfigSalesOrg/> },
  { path: "apps/configuration/orgstructure/saleschannels" , element:<ConfigSalesChannels/> },
  { path: "apps/configuration/orgstructure/salesdivisions" , element:<ConfigSalesDivisions/> },
  { path: "apps/configuration/orgstructure/salesoffices" , element:<ConfigSalesOffices/> },
  { path: "apps/configuration/orgstructure/salesgroups" , element:<ConfigSalesGroups/> },
  { path: "apps/configuration/orgstructure/salespersons" , element:<ConfigSalesPersons/> },
  { path: "apps/configuration/orgstructure/territories" , element:<ConfigTerritories/> },
  { path: "apps/configuration/orgstructure/territoryscopes" , element:<ConfigTerritoryScopes/> },
  { path: "apps/configuration/orgstructure/purchaseorg" , element:<ConfigPurchaseOrg/> },
  { path: "apps/configuration/orgstructure/buyergroups" , element:<ConfigBuyerGroups/> },
  { path: "apps/configuration/orgstructure/buyerpersons" , element:<ConfigBuyerPersons/> },
  { path: "apps/configuration/orgstructure/procurementcommittee" , element:<ConfigProcurementCommittee/> },
  { path: "apps/configuration/orgstructure/warehouselocation" , element:<ConfigWarehouseLocation/> },
  { path: "apps/configuration/orgstructure/warehousenumber" , element:<ConfigWarehouseNumber/> },

  { path: "apps/configuration/formbuilder/custom" , element:<CustomFormBuilder/> },
  { path: "apps/configuration/formbuilder/config" , element:<ConfigFormBuilder/> },
  { path: "apps/configuration/integration/custom" , element:<CustomIntegration/> },
  { path: "apps/configuration/integration/config" , element:<ConfigIntegration/> },
  { path: "apps/configuration/mailtemplate/custom" , element:<CustomMailTemplate/> },
  { path: "apps/configuration/mailtemplate/config" , element:<ConfigMailTemplate/> },
  { path: "apps/configuration/portaldesigner/custom" , element:<CustomPortalDesigner/> },
  { path: "apps/configuration/portaldesigner/config" , element:<ConfigPortalDesigner/> },
  { path: "apps/configuration/printoutpainter/custom" , element:<CustomPrintoutPainter/> },
  { path: "apps/configuration/printoutpainter/config" , element:<ConfigPrintoutPainter/> },
  { path: "apps/configuration/processbuilder/custom" , element:<CustomProcessBuilder/> },
  { path: "apps/configuration/processbuilder/config" , element:<ConfigProcessBuilder/> },
  { path: "apps/configuration/reportpainter/custom" , element:<CustomReportPainter/> },
  { path: "apps/configuration/reportpainter/config" , element:<ConfigReportPainter/> },
  { path: "apps/configuration/substitution/custom" , element:<CustomSubstitution/> },
  { path: "apps/configuration/substitution/config" , element:<ConfigSubstitution/> },
  { path: "apps/configuration/validation/custom" , element:<CustomValidation/> },
  { path: "apps/configuration/validation/config" , element:<ConfigValidation/> },
  { path: "apps/configuration/workflowbuilder/custom" , element:<CustomWorkflowBuilder/> },
  { path: "apps/configuration/workflowbuilder/config" , element:<ConfigWorkflowBuilder/> },


  { path: "apps/messages/chat", element: <Chat /> },
  { path: "apps/messages/email", element: <Email /> },
  { path: "apps/file-manager", element: <FileManager /> },
  { path: "pages/pricing", element: <Pricing /> },
  { path: "pages/faq", element: <Faq /> },
  { path: "pages/profile", element: <Profile /> },
  { path: "pages/people", element: <People /> },
  { path: "pages/activity", element: <Activity /> },
  
  { path: "pages/settings", element: <Settings /> },
  { path: "docs/layout/grid", element: <LayoutGrid /> },
  { path: "docs/layout/columns", element: <LayoutColumns /> },
  { path: "docs/layout/gutters", element: <LayoutGutters /> },
  { path: "docs/com/accordions", element: <Accordions /> },
  { path: "docs/com/alerts", element: <Alerts /> },
  { path: "docs/com/avatars", element: <Avatars /> },
  { path: "docs/com/badge", element: <Badges /> },
  { path: "docs/com/breadcrumbs", element: <Breadcrumbs /> },
  { path: "docs/com/buttons", element: <Buttons /> },
  { path: "docs/com/cards", element: <Cards /> },
  { path: "docs/com/carousel", element: <Carousels /> },
  { path: "docs/com/dropdown", element: <Dropdowns /> },
  { path: "docs/com/images", element: <Images /> },
  { path: "docs/com/listgroup", element: <Listgroup /> },
  { path: "docs/com/markers", element: <Markers /> },
  { path: "docs/com/modal", element: <Modals /> },
  { path: "docs/com/navtabs", element: <NavTabs /> },
  { path: "docs/com/offcanvas", element: <OffCanvas /> },
  { path: "docs/com/pagination", element: <Paginations /> },
  { path: "docs/com/placeholders", element: <Placeholders /> },
  { path: "docs/com/popovers", element: <Popovers /> },
  { path: "docs/com/progress", element: <Progress /> },
  { path: "docs/com/spinners", element: <Spinners /> },
  { path: "docs/com/toasts", element: <Toasts /> },
  { path: "docs/com/tooltips", element: <Tooltips /> },
  { path: "docs/com/tables", element: <Tables /> },
  { path: "docs/form/elements", element: <FormElements /> },
  { path: "docs/form/selects", element: <FormSelects /> },
  { path: "docs/form/checksradios", element: <FormChecksRadios /> },
  { path: "docs/form/range", element: <FormRange /> },
  { path: "docs/form/pickers", element: <FormPickers /> },
  { path: "docs/form/layouts", element: <FormLayouts /> },
  { path: "docs/chart/apex", element: <ApexCharts /> },
  { path: "docs/chart/chartjs", element: <ChartJs /> },
  { path: "docs/map/leaflet", element: <MapLeaflet /> },
  { path: "docs/map/vector", element: <MapVector /> },
  { path: "docs/icon/remix", element: <IconRemix /> },
  { path: "docs/icon/feather", element: <IconFeather /> },
  { path: "docs/util/background", element: <UtilBackground /> },
  { path: "docs/util/border", element: <UtilBorder /> },
  { path: "docs/util/colors", element: <UtilColors /> },
  { path: "docs/util/divider", element: <UtilDivider /> },
  { path: "docs/util/flex", element: <UtilFlex /> },
  { path: "docs/util/sizing", element: <UtilSizing /> },
  { path: "docs/util/spacing", element: <UtilSpacing /> },
  { path: "docs/util/opacity", element: <UtilOpacity /> },
  { path: "docs/util/position", element: <UtilPosition /> },
  { path: "docs/util/typography", element: <UtilTypography /> },
  { path: "docs/util/shadows", element: <UtilShadows /> },
  { path: "docs/util/extras", element: <UtilExtras /> }
]

export default protectedRoutes;