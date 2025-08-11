const homeMenu= [
  {
    "link": "/apps/home/myview"
  }
];

const dashboardMenu = [
  {
    "label": "Finance Monitoring",
    "link": "/dashboard/finance",
    "icon": "ri-pie-chart-2-line"
  },
  {
    "label": "Events Management",
    "link": "/dashboard/events",
    "icon": "ri-calendar-todo-line"
  },
  {
    "label": "Sales Monitoring",
    "link": "/dashboard/sales",
    "icon": "ri-shopping-bag-3-line"
  },
  {
    "label": "Website Analytics",
    "link": "/dashboard/analytics",
    "icon": "ri-bar-chart-2-line"
  },
  {
    "label": "Cryptocurrency",
    "link": "/dashboard/crypto",
    "icon": "ri-coin-line"
  },
  {
    "label": "Helpdesk Service",
    "link": "/dashboard/helpdesk",
    "icon": "ri-service-line"
  },
  {
    "label": "Storage Management",
    "link": "/dashboard/storage",
    "icon": "ri-hard-drive-2-line"
  },
  {
    "label": "Product Management",
    "link": "/dashboard/product",
    "icon": "ri-suitcase-2-line"
  }
];

const inboxMenu  = [
  {
    "label": "Email",
    "link": "/apps/messages/email",
    "icon": "far-envelope"
  },
  {
    "label": "Chat",
    "link": "/apps/messages/chat",
    "icon": "far-comment-dollar"
  }
];

const taskMenu = [
  {
    "label": "Calendar",
    "link": "/apps/tasks/calendar",
    "icon": "far-calendar-heart"
  },
  {
    "label": "Task Manager",
    "link": "/apps/tasks/tasks",
    "icon": "far-square-check"
  },
];

const networkMenu = [
  {
    "label": "Contact",
    "link": "/apps/networks/contacts",
    "icon": "far-address-book"
  },
  {
    "label": "Connection",
    "link": "/apps/networks/connections",
    "icon": "far-link"
  },
  {
    "label": "Business Partner",
    "link": "/apps/networks/businesspartners",
    "icon": "far-handshake"
  },
  {
    "label": "Group",
    "link": "/apps/networks/groups",
    "icon": "far-people-group"
  },
  {
    "label": "Business Events",
    "link": "/apps/networks/events",
    "icon": "far-calendar-star"
  },
];

const portalMenu = [
  {
    "label": "Company Website",
    "link": "/apps/portal/companywebsite",
    "icon": "far-rectangle-history"
  },
  {
    "label": "Customer Portal",
    "link": "/apps/portal/customerportal",
    "icon": "far-store"
  },
  {
    "label": "Vendor Portal",
    "link": "/apps/portal/vendorportal",
    "icon": "far-globe-pointer"
  }
];

const crmAppsMenu = [
  {
    "label": "Org. Structure",
    "icon": "far-sitemap",
    "submenu": [
      {
        "label": "Sales Org.",
        "link": "/apps/sales/orgstructure/salesorg"
      },
      {
        "label": "Sales Channels",
        "link": "/apps/sales/orgstructure/saleschannels"
      },
      {
        "label": "Sales Divisions",
        "link": "/apps/sales/orgstructure/salesdivisions"
      },
      {
        "label": "Sales Offices",
        "link": "/apps/sales/orgstructure/salesoffices"
      },
      {
        "label": "Sales Groups",
        "link": "/apps/sales/orgstructure/salesgroups"
      },
      {
        "label": "Sales Persons",
        "link": "/apps/sales/orgstructure/salespersons"
      },
      {
        "label": "Territories",
        "link": "/apps/sales/orgstructure/territories"
      },
      {
        "label": "Territory Scopes",
        "link": "/apps/sales/orgstructure/territoryscopes"
      }
    ]
  },
  {
    "label": "Master Data",
    "icon": "far-box",
    "submenu": [
      {
        "label": "Products",
        "link": "/apps/sales/masterdata/products"
      },
      {
        "label": "Catalogs",
        "link": "/apps/sales/masterdata/catalogs"
      },
      {
        "label": "Pricing",
        "link": "/apps/sales/masterdata/pricing"
      },
      {
        "label": "Bill of Materials",
        "link": "/apps/sales/masterdata/billofmaterials"
      },
      {
        "label": "Batches",
        "link": "/apps/sales/masterdata/batches"
      },
      {
        "label": "Serial Numbers",
        "link": "/apps/sales/masterdata/serialnumbers"
      },
      {
        "label": "Equipments",
        "link": "/apps/sales/masterdata/equipments"
      },
      {
        "label": "Warranty",
        "link": "/apps/sales/masterdata/warranty"
      },
      {
        "label": "Standard Terms",
        "link": "/apps/sales/masterdata/standardterms"
      },
      {
        "label": "Work Centers",
        "link": "/apps/sales/masterdata/workcenters"
      },
      {
        "label": "Fleets",
        "link": "/apps/sales/masterdata/fleets"
      },
      {
        "label": "Technicians",
        "link": "/apps/sales/masterdata/technicians"
      },
    ]
  },
  {
    "label": "Plan & Budget",
    "icon": "far-sack-dollar",
    "submenu": [
      {
        "label": "Revenue Planning",
        "link": "/apps/sales/planbudget/revenueplanning"
      },
      {
        "label": "Sales Target",
        "link": "/apps/sales/planbudget/salestarget"
      },
      {
        "label": "Discount Budget",
        "link": "/apps/sales/planbudget/discountbudget"
      },
      {
        "label": "Sales Commission",
        "link": "/apps/sales/planbudget/salescommission"
      },
      {
        "label": "Sales KPI",
        "link": "/apps/sales/planbudget/saleskpi"
      }
    ]
  },
  {
    "label": "Voucher",
    "icon": "far-ticket",
    "submenu": [
      {
        "label": "Voucher Masters",
        "link": "/apps/sales/voucher/vouchermasters"
      },
      {
        "label": "Voucher Claim",
        "link": "/apps/sales/voucher/voucherclaim"
      }
    ]
  },
  {
    "label": "Business Partner",
    "icon": "far-handshake",
    "submenu": [
      {
        "label": "Leads",
        "link": "/apps/sales/businesspartner/leads"
      },
      {
        "label": "Contacts",
        "link": "/apps/sales/businesspartner/contacts"
      },
      {
        "label": "Customer Masters",
        "link": "/apps/sales/businesspartner/customermasters"
      },
      {
        "label": "Service Partners",
        "link": "/apps/sales/businesspartner/servicepartners"
      },
    ]
  },
  {
    "label": "Campaign",
    "icon": "far-bullhorn",
    "submenu": [
      {
        "label": "Campaigns",
        "link": "/apps/sales/campaign/campaigns"
      },
      {
        "label": "Events",
        "link": "/apps/sales/campaign/events"
      }
    ]
  },
  {
    "label": "Activity Tracker",
    "icon": "far-stopwatch",
    "submenu": [
      {
        "label": "Activities",
        "link": "/apps/sales/activitytracker/activities"
      },
      {
        "label": "Tasks",
        "link": "/apps/sales/activitytracker/tasks"
      },
      {
        "label": "Sales Visits",
        "link": "/apps/sales/activitytracker/salesvisits"
      }
    ]
  },
  {
    "label": "Pre-Sales",
    "icon": "far-filter-circle-dollar",
    "submenu": [
      {
        "label": "Opportunities",
        "link": "/apps/sales/presales/opportunities"
      },
      {
        "label": "Quotations",
        "link": "/apps/sales/presales/quotations"
      },
      {
        "label": "Proposals",
        "link": "/apps/sales/presales/proposals"
      },
      {
        "label": "Tenders",
        "link": "/apps/sales/presales/tenders"
      }
    ]
  },
  {
    "label": "Sales",
    "icon": "far-circle-dollar",
    "submenu": [
      {
        "label": "Sales Orders",
        "link": "/apps/sales/sales/salesorders"
      },
      {
        "label": "Contracts",
        "link": "/apps/sales/sales/contracts"
      },
      {
        "label": "Recurring Sales Orders",
        "link": "/apps/sales/sales/recurringsalesorders"
      }
    ]
  },
  {
    "label": "Delivery",
    "icon": "far-truck-fast",
    "submenu": [
      {
        "label": "Delivery Orders",
        "link": "/apps/sales/delivery/deliveryorders"
      },
      {
        "label": "Shipment",
        "link": "/apps/sales/delivery/shipment"
      },
      {
        "label": "Delivery Tracking",
        "link": "/apps/sales/delivery/deliverytracking"
      }
    ]
  },
  {
    "label": "Billing",
    "icon": "far-file-invoice-dollar",
    "submenu": [
      {
        "label": "Customer Billing",
        "link": "/apps/sales/billing/customerbilling"
      },
      {
        "label": "Billing Collection",
        "link": "/apps/sales/billing/billingcollection"
      }
    ]
  },
  {
    "label": "After Sales",
    "icon": "far-face-smile",
    "submenu": [
      {
        "label": "Cases",
        "link": "/apps/sales/aftersales/cases"
      },
      {
        "label": "Service Request",
        "link": "/apps/sales/aftersales/servicerequest"
      },
      {
        "label": "Warranty Claim",
        "link": "/apps/sales/aftersales/warrantyclaim"
      },
      {
        "label": "Dispatching",
        "link": "/apps/sales/aftersales/dispatching"
      },
      {
        "label": "Service Orders",
        "link": "/apps/sales/aftersales/serviceorders"
      },
      {
        "label": "Confirmations",
        "link": "/apps/sales/aftersales/confirmations"
      },
      {
        "label": "Settlement",
        "link": "/apps/sales/aftersales/settlement"
      }
    ]
  },
  {
    "label": "Loyalty",
    "icon": "far-coins",
    "submenu": [
      {
        "label": "Loyalty Programs",
        "link": "/apps/sales/loyalty/loyaltyprograms"
      },
      {
        "label": "Reward Catalogs",
        "link": "/apps/sales/loyalty/rewardcatalogs"
      },
      {
        "label": "Memberships",
        "link": "/apps/sales/loyalty/memberships"
      }
    ]
  },
  {
    "label": "CRM Rerport",
    "icon": "far-chart-mixed",
    "submenu": [
      {
        "label": "KPI Report",
        "link": "/apps/sales/crmreport/kpireport"
      },
      {
        "label": "Sales Report",
        "link": "/apps/sales/crmreport/salesreport"
      },
      {
        "label": "Delivery Report",
        "link": "/apps/sales/crmreport/deliveryreport"
      },
      {
        "label": "Inventory Report",
        "link": "/apps/sales/crmreport/inventoryreport"
      },
      {
        "label": "Billing Report",
        "link": "/apps/sales/crmreport/billingreport"
      },
      {
        "label": "Customer Report",
        "link": "/apps/sales/crmreport/customerreport"
      },
      {
        "label": "Product Report",
        "link": "/apps/sales/crmreport/productreport"
      }
    ]
  }
];

const srmAppsMenu = [
  {
    "label": "Org. Structure",
    "icon": "far-sitemap",
    "submenu": [
      {
        "label": "Purchase Org.",
        "link": "/apps/purchase/orgstructure/purchaseorg"
      },
      {
        "label": "Buyer Groups",
        "link": "/apps/purchase/orgstructure/buyergroups"
      },
      {
        "label": "Buyer Persons",
        "link": "/apps/purchase/orgstructure/buyerpersons"
      },
      {
        "label": "Procurement Committee",
        "link": "/apps/purchase/orgstructure/procurementcommittee"
      },
    ]
  },
  {
    "label": "Master Data",
    "icon": "far-box",
    "submenu": [
      {
        "label": "Products",
        "link": "/apps/purchase/masterdata/products"
      },
      {
        "label": "Catalogs",
        "link": "/apps/purchase/masterdata/catalogs"
      },
      {
        "label": "Pricing",
        "link": "/apps/purchase/masterdata/pricing"
      },
      {
        "label": "Vendor List",
        "link": "/apps/purchase/masterdata/vendorlist"
      },
      {
        "label": "Bill of Materials",
        "link": "/apps/purchase/masterdata/bom"
      },
      {
        "label": "Batches",
        "link": "/apps/purchase/masterdata/batches"
      },
      {
        "label": "Serial Numbers",
        "link": "/apps/purchase/masterdata/serialnumber"
      },
      {
        "label": "Equipments",
        "link": "/apps/purchase/masterdata/equipments"
      },
      {
        "label": "Warranty",
        "link": "/apps/purchase/masterdata/warranty"
      },
      {
        "label": "Standard Terms",
        "link": "/apps/purchase/masterdata/standardterms"
      }
    ]
  },
  {
    "label": "Plan & Budget",
    "icon": "far-sack-dollar",
    "submenu": [
      {
        "label": "Purchase Planning",
        "link": "/apps/purchase/planbudget/purchaseplan"
      },
      {
        "label": "Purchase Target",
        "link": "/apps/purchase/planbudget/purchasetarget"
      },
      {
        "label": "Purchase Budget",
        "link": "/apps/purchase/planbudget/purchasebudget"
      },
      {
        "label": "Purchase KPI",
        "link": "/apps/purchase/planbudget/purchasekpi"
      }
    ]
  },
  {
    "label": "Voucher",
    "icon": "far-ticket",
    "submenu": [
      {
        "label": "Voucher Masters",
        "link": "/apps/purchase/voucher/vouchermasters"
      },
      {
        "label": "Voucher Claim",
        "link": "/apps/purchase/voucher/voucherclaim"
      }
    ]
  },
  {
    "label": "Business Partner",
    "icon": "far-handshake",
    "submenu": [
      {
        "label": "Vendor Leads",
        "link": "/apps/purchase/businesspartner/vendorleads"
      },
      {
        "label": "Contacts",
        "link": "/apps/purchase/businesspartner/contacts"
      },
      {
        "label": "Vendor Masters",
        "link": "/apps/purchase/businesspartner/vendormasters"
      },
      {
        "label": "Service Partners",
        "link": "/apps/purchase/businesspartner/servicepartners"
      },
    ]
  },
  
  {
    "label": "Activity Tracker",
    "icon": "far-stopwatch",
    "submenu": [
      {
        "label": "Activities",
        "link": "/apps/purchase/activitytracker/activities"
      },
      {
        "label": "Tasks",
        "link": "/apps/purchase/activitytracker/tasks"
      }
    ]
  },
  {
    "label": "Requisition",
    "icon": "far-hand",
    "submenu": [
      {
        "label": "Purchase Requisitions",
        "link": "/apps/purchase/requisition/purchaserequisitions"
      }
    ]
  },
  {
    "label": "Selection Rule",
    "icon": "far-list-radio",
    "submenu": [
      {
        "label": "Criteria",
        "link": "/apps/purchase/selectionrule/criteria"
      },
      {
        "label": "Method",
        "link": "/apps/purchase/selectionrule/method"
      }
    ]
  },
  {
    "label": "Sourcing",
    "icon": "far-magnifying-glass-location",
    "submenu": [
      {
        "label": "Self Service Purchase",
        "link": "/apps/purchase/sourcing/selfservice"
      },
      {
        "label": "Request for Quotations",
        "link": "/apps/purchase/sourcing/requestforquotations"
      },
      {
        "label": "Request for Proposal",
        "link": "/apps/purchase/sourcing/requestforproposals"
      },
      {
        "label": "Tenders",
        "link": "/apps/purchase/sourcing/tenders"
      }
    ]
  },
  {
    "label": "Purchase",
    "icon": "far-cart-shopping",
    "submenu": [
      {
        "label": "Purchase Orders",
        "link": "/apps/purchase/purchase/purchaseorders"
      },
      {
        "label": "Contracts",
        "link": "/apps/purchase/purchase/contracts"
      }
    ]
  },
  {
    "label": "Delivery",
    "icon": "far-truck-fast",
    "submenu": [
      {
        "label": "Delivery Orders",
        "link": "/apps/purchase/delivery/deliveryorders"
      },
      {
        "label": "Shipment",
        "link": "/apps/purchase/delivery/shipment"
      },
      {
        "label": "Delivery Tracking",
        "link": "/apps/purchase/delivery/deliverytracking"
      }
    ]
  },
  {
    "label": "Invoice",
    "icon": "far-file-invoice-dollar",
    "submenu": [
      {
        "label": "Vendor Invoice",
        "link": "/apps/purchase/invoice/vendorinvoice"
      },
      {
        "label": "Invoice Status",
        "link": "/apps/purchase/invoice/invoicestatus"
      }
    ]
  },
  {
    "label": "Service Case",
    "icon": "far-face-smile",
    "submenu": [
      {
        "label": "Cases",
        "link": "/apps/purchase/servicecase/cases"
      },
      {
        "label": "Service Request",
        "link": "/apps/purchase/servicecase/servicerequest"
      },
      {
        "label": "Warranty Claim",
        "link": "/apps/purchase/servicecase/warrantyclaim"
      },
      {
        "label": "Service Orders",
        "link": "/apps/purchase/servicecase/seserviceorders"
      },
      {
        "label": "Confirmations",
        "link": "/apps/purchase/servicecase/confirmation"
      }
    ]
  },
  {
    "label": "Loyalty",
    "icon": "far-coins",
    "submenu": [
      {
        "label": "Membership",
        "link": "/apps/purchase/loyalty/membership"
      }
    ]
  },
  {
    "label": "SRM Rerport",
    "icon": "far-chart-mixed",
    "submenu": [
      {
        "label": "KPI Report",
        "link": "/apps/purchase/srmreport/kpireport"
      },
      {
        "label": "Purchase Report",
        "link": "/apps/purchase/srmreport/purchasereport"
      },
      {
        "label": "Delivery Report",
        "link": "/apps/purchase/srmreport/deliveryreport"
      },
      {
        "label": "Inventory Report",
        "link": "/apps/purchase/srmreport/inventoryreport"
      },
      {
        "label": "Invoice Report",
        "link": "/apps/purchase/srmreport/invoicereport"
      },
      {
        "label": "Vendor Report",
        "link": "/apps/purchase/srmreport/vendorreport"
      },
      {
        "label": "Product Report",
        "link": "/apps/purchase/srmreport/productreport"
      }
    ]
  }
];

const wmsAppsMenu = [
  {
    "label": "Org. Structure",
    "icon": "far-sitemap",
    "submenu": [
      {
        "label": "Warehouse Location",
        "link": "/apps/warehouse/orgstructure/warehouselocation"
      },
      {
        "label": "Warehouse Number",
        "link": "/apps/warehouse/orgstructure/warehousenumber"
      }
    ]
  },
  {
    "label": "Design",
    "icon": "far-pen-ruler",
    "submenu": [
      {
        "label": "Warehouse Zone",
        "link": "/apps/warehouse/design/warehousezone"
      },
      {
        "label": "Warehouse Aisle",
        "link": "/apps/warehouse/design/warehouseaisle"
      },
      {
        "label": "Warehouse Rack",
        "link": "/apps/warehouse/design/warehouserack"
      },
      {
        "label": "Warehouse Level",
        "link": "/apps/warehouse/design/warehouselevel"
      },
      {
        "label": "Warehouse Bin",
        "link": "/apps/warehouse/design/warehousebin"
      },
      {
        "label": "Layout Designer",
        "link": "/apps/warehouse/design/warehousedesigner"
      }
    ]
  },
  {
    "label": "Master Data",
    "icon": "far-box",
    "submenu": [
      {
        "label": "Products",
        "link": "/apps/warehouse/masterdata/products"
      },
      {
        "label": "Bill of Materials",
        "link": "/apps/warehouse/masterdata/bom"
      },
      {
        "label": "Batches",
        "link": "/apps/warehouse/masterdata/batches"
      },
      {
        "label": "Serial Numbers",
        "link": "/apps/warehouse/masterdata/serialnumber"
      },
      {
        "label": "Equipments",
        "link": "/apps/warehouse/masterdata/equipments"
      }
    ]
  },
  {
    "label": "Requisition",
    "icon": "far-hand",
    "submenu": [
      {
        "label": "Purchase Requisition",
        "link": "/apps/warehouse/requisition/purchaserequisition"
      },
      {
        "label": "Material Req. Planning",
        "link": "/apps/warehouse/requisition/mrp"
      },
      {
        "label": "Transfer Requisition",
        "link": "/apps/warehouse/requisition/transferreservation"
      },
      {
        "label": "Outbond Requisition",
        "link": "/apps/warehouse/requisition/outboundreservation"
      },
      {
        "label": "Commit to Reserved",
        "link": "/apps/warehouse/requisition/committoreserved"
      }
    ]
  },
  {
    "label": "Inventory",
    "icon": "far-boxes-stacked",
    "submenu": [
      {
        "label": "On-Hand Stock",
        "link": "/apps/warehouse/inventory/stockonhand"
      },
      {
        "label": "Vendor Manage Inventory",
        "link": "/apps/warehouse/inventory/stockvmi"
      },
      {
        "label": "Consignment Stock",
        "link": "/apps/warehouse/inventory/stockconsignment"
      },
      {
        "label": "Customer Stock",
        "link": "/apps/warehouse/inventory/stockcustomer"
      },
    ]
  },
  {
    "label": "Goods Movement",
    "icon": "far-forklift",
    "submenu": [
      {
        "label": "Proposal of Delivery",
        "link": "/apps/warehouse/goodsmovement/proposalofdelivery"
      },
      {
        "label": "Goods Receipt",
        "link": "/apps/warehouse/goodsmovement/goodsreceipt"
      },
      {
        "label": "Goods Issue",
        "link": "/apps/warehouse/goodsmovement/goodsissue"
      },
      {
        "label": "Proof of Delivery",
        "link": "/apps/warehouse/goodsmovement/proofofdelivery"
      },
      {
        "label": "Stock Transfer",
        "link": "/apps/warehouse/goodsmovement/stocktransfer"
      },
      {
        "label": "Quality Inspection",
        "link": "/apps/warehouse/goodsmovement/qualityinspection"
      },
      {
        "label": "Putaway",
        "link": "/apps/warehouse/goodsmovement/putaway"
      },
      {
        "label": "Picking",
        "link": "/apps/warehouse/goodsmovement/picking"
      },
      {
        "label": "Packing",
        "link": "/apps/warehouse/goodsmovement/packing"
      },
      {
        "label": "Repacking",
        "link": "/apps/warehouse/goodsmovement/repacking"
      },
      {
        "label": "Labeling",
        "link": "/apps/warehouse/goodsmovement/labeling"
      },
      {
        "label": "Relabeling",
        "link": "/apps/warehouse/goodsmovement/relabeling"
      },
      {
        "label": "Loading",
        "link": "/apps/warehouse/goodsmovement/loading"
      },
      {
        "label": "Unloading",
        "link": "/apps/warehouse/goodsmovement/unloading"
      },
      {
        "label": "Stock Taking",
        "link": "/apps/warehouse/goodsmovement/stocktaking"
      },
      {
        "label": "Stock Adjustment",
        "link": "/apps/warehouse/goodsmovement/stockadjustment"
      },
      {
        "label": "Stock Return",
        "link": "/apps/warehouse/goodsmovement/stockreturn"
      },
      {
        "label": "Cancel Transactions",
        "link": "/apps/warehouse/goodsmovement/goodscanceltransactions"
      }, 
    ]
  },
  {
    "label": "Service Transactions",
    "icon": "far-hand-holding-heart",
    "submenu": [
      {
        "label": "Proposal of Acceptance",
        "link": "/apps/warehouse/servicetransactions/proposalofacceptance"
      },
      {
        "label": "Service Acceptance",
        "link": "/apps/warehouse/servicetransactions/serviceacceptance"
      },
      {
        "label": "Service Inspection",
        "link": "/apps/warehouse/servicetransactions/serviceinspection"
      },
      {
        "label": "Proof of Service",
        "link": "/apps/warehouse/servicetransactions/proofofservice"
      },
      {
        "label": "Cancel Transactions",
        "link": "/apps/warehouse/servicetransactions/servicecanceltransactions"
      }, 
    ]
  },
  {
    "label": "WMS Rerport",
    "icon": "far-chart-mixed",
    "submenu": [
      {
        "label": "KPI Report",
        "link": "/apps/warehouse/wmsreport/warehousekpireport"
      },
      {
        "label": "Fulfillment Report",
        "link": "/apps/warehouse/wmsreport/fulfillmentreport"
      },
      {
        "label": "Inventory Report",
        "link": "/apps/warehouse/wmsreport/inventoryreport"
      },
      {
        "label": "Goods Movement Report",
        "link": "/apps/warehouse/wmsreport/goodsmovementreport"
      },
      {
        "label": "Service Report",
        "link": "/apps/warehouse/wmsreport/servicereport"
      },
      {
        "label": "Product Report",
        "link": "/apps/warehouse/wmsreport/warehouseproductreport"
      }
    ]
  }
];  

const oneviewAppsMenu = [
  {
    "label": "View Layout",
    "icon": "far-table-layout",
    "submenu": [
      {
        "label": "Template",
        "link": "/apps/oneview/viewlayout/template"
      },
      {
        "label": "Assignment",
        "link": "/apps/oneview/viewlayout/assignment"
      }
    ]
  },
  {
    "label": "Announcement",
    "icon": "far-bullhorn",
    "submenu": [
      {
        "label": "Announcement",
        "link": "/apps/oneview/announcement/announcement"
      },
    ]
  },

  {
    "label": "Survey",
    "icon": "far-square-poll-vertical",
    "submenu": [
      {
        "label": "Survey",
        "link": "/apps/oneview/survey/survey"
      },
      {
        "label": "Quick Poll",
        "link": "/apps/oneview/survey/quickpoll"
      }
    ]
  },
  
]; 

const settingMenu = [
  {
    "label": "Account Setting",
    "icon": "far-user-gear",
    "submenu": [
      {
        "label": "Basic Data",
        "link": "/apps/settings/accountsetting/basicdata"
      },
      {
        "label": "Profile Setting",
        "link": "/apps/settings/accountsetting/profilesetting"
      },
    ]
  },
  {
    "label": "Digital Signature",
    "icon": "far-signature-lock",
    "submenu": [
      {
        "label": "Signature Setting",
        "link": "/apps/settings/digitalsignature/signaturesetting"
      }
    ]
  },

  
];  

const adminMenu = [
  {
    "label": "Org.  Systems",
    "icon": "far-building",
    "submenu": [
      {
        "label": "Tenant ID",
        "link": "/apps/administration/orgsystems/tenantid"
      },
      {
        "label": "System ID",
        "link": "/apps/administration/orgsystems/systemid"
      },
      {
        "label": "Organization ID",
        "link": "/apps/administration/orgsystems/organizationid"
      },
    ]
  },
  {
    "label": "Applications",
    "icon": "far-grid-2",
    "submenu": [
      {
        "label": "Applications",
        "link": "/apps/administration/applications"
      },
      {
        "label": "Apps Market",
        "link": "/apps/administration/appsmarket"
      },
      {
        "label": "Resources",
        "link": "/apps/administration/resources"
      },
      {
        "label": "Utilities",
        "link": "/apps/administration/utilities"
      },
    ]
  },
  {
    "label": "Subscriptions",
    "icon": "far-crown",
    "submenu": [
      {
        "label": "License Subscriptions",
        "link": "/apps/administration/subscriptions/licensesubsciptions"
      },
      // {
      //   "label": "Licenses",
      //   "link": "/apps/administration/licenses"
      // },
      {
        "label": "Payment Method",
        "link": "/apps/administration/subscriptions/paymentmethod"
      },
      {
        "label": "Invoices",
        "link": "/apps/administration/subscriptions/subscriptioninvoices"
      }
    ]
  },
  {
    "label": "User & Groups",
    "icon": "far-users-gear",
    "submenu": [
      {
        "label": "Users",
        "link": "/apps/administration/usersadministration"
      },
      {
        "label": "User Groups",
        "link": "/apps/administration/usergroupsadministration"
      },
      {
        "label": "Authorization Roles",
        "link": "/apps/administration/authorizationroles"
      },
    ]
  },
  {
    "label": "Security",
    "icon": "far-shield-check",
    "submenu": [
      {
        "label": "Authentication",
        "link": "/apps/administration/authentication"
      },
      {
        "label": "Alert Center",
        "link": "/apps/administration/alertcenter"
      },
      {
        "label": "API Controls",
        "link": "/apps/administration/apicontrols"
      },
    ]
  },
];  

const configMenu = [
  {
    "label": "General",
    "icon": "far-gear",
    "submenu": [
      {
        "label": "General Settings",
        "link": "apps/configuration/general/generalsettings"
      },
      {
        "label": "User Settings",
        "link": "apps/configuration/general/menusettings"
      },
      {
        "label": "Menu Settings",
        "link": "apps/configuration/general/usersettings"
      },
    ]
  },
  {
    "label": "Company",
    "icon": "far-building-magnifying-glass",
    "submenu": [
      {
        "label": "Company",
        "link": "/apps/configuration/company/company"
      },
      {
        "label": "Plant",
        "link": "/apps/configuration/company/plant"
      },
    ]
  },
  {
    "label": "Org. Structure",
    "icon": "far-sitemap",
    "submenu": [
      {
        "label": "Sales Org.",
        "link": "/apps/configuration/orgstructure/salesorg"
      },
      {
        "label": "Sales Channels",
        "link": "/apps/configuration/orgstructure/saleschannels"
      },
      {
        "label": "Sales Divisions",
        "link": "/apps/configuration/orgstructure/salesdivisions"
      },
      {
        "label": "Sales Offices",
        "link": "/apps/configuration/orgstructure/salesoffices"
      },
      {
        "label": "Sales Groups",
        "link": "/apps/configuration/orgstructure/salesgroups"
      },
      {
        "label": "Sales Persons",
        "link": "/apps/configuration/orgstructure/salespersons"
      },
      {
        "label": "Territories",
        "link": "/apps/configuration/orgstructure/territories"
      },
      {
        "label": "Territory Scope",
        "link": "/apps/configuration/orgstructure/territoryscopes"
      },
      {
        "label": "Purchase Org.",
        "link": "/apps/configuration/orgstructure/purchaseorg"
      },
      {
        "label": "Buyer Groups",
        "link": "/apps/configuration/orgstructure/buyergroups"
      },
      {
        "label": "Buyer Persons",
        "link": "/apps/configuration/orgstructure/buyerpersons"
      },
      {
        "label": "Procurement Committee",
        "link": "/apps/configuration/orgstructure/procurementcommittee"
      },
      {
        "label": "Warehouse Location",
        "link": "/apps/configuration/orgstructure/warehouselocation"
      },
      {
        "label": "Warehouse Number",
        "link": "/apps/configuration/orgstructure/warehousenumber"
      },
    ]
  },
  {
    "label": "Design",
    "icon": "far-pen-ruler",
    "submenu": [
      {
        "label": "Warehouse Zone",
        "link": "/apps/configuration/design/warehousezone"
      },
      {
        "label": "Warehouse Aisle",
        "link": "/apps/configuration/design/warehouseaisle"
      },
      {
        "label": "Warehouse Rack",
        "link": "/apps/configuration/design/warehouserack"
      },
      {
        "label": "Warehouse Level",
        "link": "/apps/configuration/design/warehouselevel"
      },
      {
        "label": "Warehouse Bin",
        "link": "/apps/configuration/design/warehousebin"
      },
      {
        "label": "Layout Designer",
        "link": "/apps/configuration/design/layoutdesigner"
      }
    ]
  },
  {
    "label": "Master Data",
    "icon": "far-box-open",
    "submenu": [
      {
        "label": "Products",
        "link": "/apps/configuration/masterdata/products"
      },
      {
        "label": "Catalogs",
        "link": "/apps/configuration/masterdata/catalogs"
      },
      {
        "label": "Pricing",
        "link": "/apps/configuration/masterdata/pricing"
      },
      {
        "label": "Vendor List",
        "link": "/apps/configuration/masterdata/vendorlist"
      },
      {
        "label": "Bill of Materials",
        "link": "/apps/configuration/masterdata/billofmaterial"
      },
      {
        "label": "Batches",
        "link": "/apps/configuration/masterdata/batches"
      },
      {
        "label": "Serial Numbers",
        "link": "/apps/configuration/masterdata/serialnumber"
      },
      {
        "label": "Equipmnents",
        "link": "/apps/configuration/masterdata/equipments"
      },
      {
        "label": "Warranty",
        "link": "/apps/configuration/masterdata/warranty"
      },
      {
        "label": "Standard Terms",
        "link": "/apps/configuration/masterdata/standardterms"
      },
      {
        "label": "Work Centers",
        "link": "/apps/configuration/masterdata/workcenters"
      },
      {
        "label": "Fleets",
        "link": "/apps/configuration/masterdata/fleets"
      },
      {
        "label": "Technicians",
        "link": "/apps/configuration/masterdata/technicians"
      },
    ]
  },
  {
    "label": "Sales",
    "icon": "far-heart",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Purchase",
    "icon": "far-cart-shopping",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Warehouse",
    "icon": "far-warehouse",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Workflow Builder",
    "icon": "far-arrow-progress",
    "submenu": [
      {
        "label": "Workflow Builder",
        "link": "/apps/configuration/workflowbuilder/config"
      },
      {
        "label": "Customization",
        "link": "/apps/configuration/workflowbuilder/custom"
      },
    ]
  },
  {
    "label": "Process Builder",
    "icon": "far-diagram-project",
    "submenu": [
      {
        "label": "Process Builder",
        "link": "/apps/configuration/processbuilder/config"
      },
      {
        "label": "Custromization",
        "link": "/apps/configuration/processbuilder/custom"
      },
    ]
  },
  {
    "label": "Portal Designer",
    "icon": "far-palette",
    "submenu": [
      {
        "label": "Portal Designer",
        "link": "/apps/configuration/portaldesigner/config"
      },
      {
        "label": "Custromization",
        "link": "/apps/configuration/portaldesigner/custom"
      },
    ]
  },
  {
    "label": "Report Painter",
    "icon": "far-paint-roller",
    "submenu": [
      {
        "label": "Report Painter",
        "link": "/apps/configuration/reportpainter/config"
      },
      {
        "label": "Custromization",
        "link": "/apps/configuration/reportpainter/custom"
      },
    ]
  },
  {
    "label": "Mail Template",
    "icon": "far-envelope-open-text",
    "submenu": [
      {
        "label": "Mail Template",
        "link": "/apps/configuration/mailtemplate/config"
      },
      {
        "label": "Custromization",
        "link": "/apps/configuration/mailtemplate/custom"
      },
    ]
  },
  {
    "label": "Print Out Painter",
    "icon": "far-file-invoice",
    "submenu": [
      {
        "label": "Print Out Painter",
        "link": "/apps/configuration/printoutpainter/config"
      },
      {
        "label": "Customization",
        "link": "/apps/configuration/printoutpainter/custom"
      },
    ]
  },
  {
    "label": "Form Builder",
    "icon": "far-pen-to-square",
    "submenu": [
      {
        "label": "Form Builder",
        "link": "/apps/configuration/formbuilder/config"
      },
      {
        "label": "Customization",
        "link": "/apps/configuration/formbuilder/custom"
      },
    ]
  },
  {
    "label": "Validation",
    "icon": "far-triangle-exclamation",
    "submenu": [
      {
        "label": "Validation",
        "link": "/apps/configuration/validation/config"
      },
      {
        "label": "Customization",
        "link": "/apps/configuration/validation/custom"
      },
    ]
  },
  {
    "label": "Substitution",
    "icon": "far-arrow-right-arrow-left",
    "submenu": [
      {
        "label": "Substitution",
        "link": "/apps/configuration/substitution/config"
      },
      {
        "label": "Customization",
        "link": "/apps/configuration/substitution/custom"
      },
    ]
  },
  {
    "label": "Integration",
    "icon": "far-chart-network",
    "submenu": [
      {
        "label": "Integration",
        "link": "/apps/configuration/integration/config"
      },
      {
        "label": "Company",
        "link": "/apps/configuration/integration/custom"
      },
    ]
  },
  
];

// const applicationsMenu = [
//   {
//     "label": "File Manager",
//     "link": "/apps/file-manager",
//     "icon": "ri-folder-2-line"
//   },
//   {
//     "label": "Email",
//     "link": "/apps/email",
//     "icon": "ri-mail-send-line"
//   },
//   {
//     "label": "Calendar",
//     "link": "/apps/calendar",
//     "icon": "ri-calendar-line"
//   },
//   {
//     "label": "Chat",
//     "link": "/apps/chat",
//     "icon": "ri-question-answer-line"
//   },
//   {
//     "label": "Contacts",
//     "link": "/apps/contacts",
//     "icon": "ri-contacts-book-line"
//   },
//   {
//     "label": "Task Manager",
//     "link": "/apps/tasks",
//     "icon": "ri-checkbox-multiple-line"
//   },
//   {
//     "label": "Media Gallery",
//     "icon": "ri-gallery-line",
//     "submenu": [
//       {
//         "label": "Music Stream",
//         "link": "/apps/gallery-music"
//       },
//       {
//         "label": "Video Stream",
//         "link": "/apps/gallery-video"
//       }
//     ]
//   }
// ];

// const pagesMenu = [
//   {
//     "label": "User Pages",
//     "icon": "ri-account-circle-line",
//     "submenu": [
//       {
//         "label": "User Profile",
//         "link": "/pages/profile"
//       },
//       {
//         "label": "People & Groups",
//         "link": "/pages/people"
//       },
//       {
//         "label": "Activity Log",
//         "link": "/pages/activity"
//       },
//       {
//         "label": "Events",
//         "link": "/pages/events"
//       },
//       {
//         "label": "Settings",
//         "link": "/pages/settings"
//       }
//     ]
//   },
//   {
//     "id": 27,
//     "label": "Authentication",
//     "icon": "ri-lock-2-line",
//     "submenu": [
//       {
//         "label": "Sign In Basic",
//         "link": "/pages/signin"
//       },
//       {
//         "label": "Sign In Cover",
//         "link": "/pages/signin2"
//       },
//       {
//         "label": "Sign Up Basic",
//         "link": "/pages/signup"
//       },
//       {
//         "label": "Sign Up Cover",
//         "link": "/pages/signup2"
//       },
//       {
//         "label": "Verify Account",
//         "link": "/pages/verify"
//       },
//       {
//         "label": "Forgot Password",
//         "link": "/pages/forgot"
//       },
//       {
//         "label": "Lock Screen",
//         "link": "/pages/lock"
//       }
//     ]
//   },
//   {
//     "label": "Error Pages",
//     "icon": "ri-error-warning-line",
//     "submenu": [
//       {
//         "label": "Page Not Found",
//         "link": "/pages/error-404"
//       },
//       {
//         "label": "Internal Server Error",
//         "link": "/pages/error-500"
//       },
//       {
//         "label": "Service Unavailable",
//         "link": "/pages/error-503"
//       },
//       {
//         "label": "Forbidden",
//         "link": "/pages/error-505"
//       }
//     ]
//   },
//   {
//     "label": "Other Pages",
//     "icon": "ri-file-text-line",
//     "submenu": [
//       {
//         "label": "Pricing",
//         "link": "/pages/pricing"
//       },
//       {
//         "label": "FAQ",
//         "link": "/pages/faq"
//       }
//     ]
//   }
// ];

// const uiElementsMenu = [
//   {
//     "label": "Getting Started",
//     "icon": "ri-pencil-ruler-2-line",
//     "submenu": [
//       {
//         "label": "Grid System",
//         "link": "/docs/layout/grid"
//       },
//       {
//         "label": "Columns",
//         "link": "/docs/layout/columns"
//       },
//       {
//         "label": "Gutters",
//         "link": "/docs/layout/gutters"
//       }
//     ]
//   },
//   {
//     "label": "Components",
//     "icon": "ri-suitcase-line",
//     "submenu": [
//       {
//         "label": "Accordion",
//         "link": "/docs/com/accordions"
//       },
//       {
//         "label": "Alerts",
//         "link": "/docs/com/alerts"
//       },
//       {
//         "label": "Avatars",
//         "link": "/docs/com/avatars"
//       },
//       {
//         "label": "Badge",
//         "link": "/docs/com/badge"
//       },
//       {
//         "label": "Breadcrumbs",
//         "link": "/docs/com/breadcrumbs"
//       },
//       {
//         "label": "Buttons",
//         "link": "/docs/com/buttons"
//       },
//       {
//         "label": "Cards",
//         "link": "/docs/com/cards"
//       },
//       {
//         "label": "Carousel",
//         "link": "/docs/com/carousel"
//       },
//       {
//         "label": "Dropdown",
//         "link": "/docs/com/dropdown"
//       },
//       {
//         "label": "Images",
//         "link": "/docs/com/images"
//       },
//       {
//         "label": "List Group",
//         "link": "/docs/com/listgroup"
//       },
//       {
//         "label": "Markers",
//         "link": "/docs/com/markers"
//       },
//       {
//         "label": "Modal",
//         "link": "/docs/com/modal"
//       },
//       {
//         "label": "Nav & Tabs",
//         "link": "/docs/com/navtabs"
//       },
//       {
//         "label": "Offcanvas",
//         "link": "/docs/com/offcanvas"
//       },
//       {
//         "label": "Pagination",
//         "link": "/docs/com/pagination"
//       },
//       {
//         "label": "Placeholders",
//         "link": "/docs/com/placeholders"
//       },
//       {
//         "label": "Popovers",
//         "link": "/docs/com/popovers"
//       },
//       {
//         "label": "Progress",
//         "link": "/docs/com/progress"
//       },
//       {
//         "label": "Spinners",
//         "link": "/docs/com/spinners"
//       },
//       {
//         "label": "Toast",
//         "link": "/docs/com/toasts"
//       },
//       {
//         "label": "Tooltips",
//         "link": "/docs/com/tooltips"
//       },
//       {
//         "label": "Tables",
//         "link": "/docs/com/tables"
//       }
//     ]
//   },
//   {
//     "label": "Forms",
//     "icon": "ri-list-check-2",
//     "submenu": [
//       {
//         "label": "Text Elements",
//         "link": "/docs/form/elements"
//       },
//       {
//         "label": "Selects",
//         "link": "/docs/form/selects"
//       },
//       {
//         "label": "Checks & Radios",
//         "link": "/docs/form/checksradios"
//       },
//       {
//         "label": "Range",
//         "link": "/docs/form/range"
//       },
//       {
//         "label": "Pickers",
//         "link": "/docs/form/pickers"
//       },
//       {
//         "label": "Layouts",
//         "link": "/docs/form/layouts"
//       }
//     ]
//   },
//   {
//     "label": "Charts & Graphs",
//     "icon": "ri-bar-chart-2-line",
//     "submenu": [
//       {
//         "label": "ApexCharts",
//         "link": "/docs/chart/apex"
//       },
//       {
//         "label": "Chartjs",
//         "link": "/docs/chart/chartjs"
//       }
//     ]
//   },
//   {
//     "label": "Maps & Icons",
//     "icon": "ri-stack-line",
//     "submenu": [
//       {
//         "label": "Leaflet Maps",
//         "link": "/docs/map/leaflet"
//       },
//       {
//         "label": "Vector Maps",
//         "link": "/docs/map/vector"
//       },
//       {
//         "label": "Remixicon",
//         "link": "/docs/icon/remix"
//       },
//       {
//         "label": "Feathericons",
//         "link": "/docs/icon/feather"
//       }
//     ]
//   },
//   {
//     "label": "Utilities",
//     "icon": "ri-briefcase-4-line",
//     "submenu": [
//       {
//         "label": "Background",
//         "link": "/docs/util/background"
//       },
//       {
//         "label": "Border",
//         "link": "/docs/util/border"
//       },
//       {
//         "label": "Colors",
//         "link": "/docs/util/colors"
//       },
//       {
//         "label": "Divider",
//         "link": "/docs/util/divider"
//       },
//       {
//         "label": "Flex",
//         "link": "/docs/util/flex"
//       },
//       {
//         "label": "Sizing",
//         "link": "/docs/util/sizing"
//       },
//       {
//         "label": "Spacing",
//         "link": "/docs/util/spacing"
//       },
//       {
//         "label": "Opacity",
//         "link": "/docs/util/opacity"
//       },
//       {
//         "label": "Position",
//         "link": "/docs/util/position"
//       },
//       {
//         "label": "Typography",
//         "link": "/docs/util/typography"
//       },
//       {
//         "label": "Shadows",
//         "link": "/docs/util/shadows"
//       },
//       {
//         "label": "Extras",
//         "link": "/docs/util/extras"
//       }
//     ]
//   }
// ];

export 
{ 
  homeMenu,
  dashboardMenu, 
  inboxMenu, 
  taskMenu, 
  networkMenu, 
  portalMenu, 
  crmAppsMenu, 
  srmAppsMenu, 
  wmsAppsMenu, 
  oneviewAppsMenu,
  settingMenu,
  adminMenu,
  configMenu,
  // applicationsMenu, 
  // pagesMenu, 
  // uiElementsMenu 
};