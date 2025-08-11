// Table User_Licenses_Header
const userLicensesHeader = [
    {
        /* Default of Systems */
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        /* License Item */
        idno_lord: "710099871422"  /*License Order*/ /* Integrate to Sales Order */,
        idno_item: "0001" /*Item No.*/,
        type_docs: "REG0" /*Document Type*/,
        type_lord: "NEW ORDER"  /*License Order Type*/,
        idno_skus: "31542" /*SKU No.*/,
        idno_prod: "2998-001" /*Product ID*/,
        numb_prod: "100000001021" /*Product No (Auto)*/,
        desc_shrt: "Professional-User" /*Short Description*/,
        idno_lcsn: "2200996152421" /*License No.*/,
        type_lcsn: "User-Professional" /*License Type*/,
        type_apps: "Core Apps" /*Apps Type*/,
        name_apps: "Gyloop Business" /*Apps Name*/,
        date_pstr: "1 Jan 2025" /*Period Start Date*/,
        time_pstr: "18:00"  /*Period Start Time*/,
        date_pend: "31 Dec 2025" /*Periode End Date*/,
        time_pend: "18:00" /*Period End Time*/,
        code_cmpg: "VOLUNTEER28" /*Campaign Code*/,
        qnty_ordr: "2" /*Order Quantity*/,
        uoms_ordr: "Users" /*UoM*/,
        // perd_pric: "Monthly" /*Price Period*/,
        // code_curr: "USD" /*Currency*/,
        // unit_pric: "25.00" /*Unit Price*/,
        // dscp_pric: "0.20" /*Discount (%)*/,
        // dscu_pric: "5.00" /*Price Discount*/,
        // stot_pric: "50.00" /*Sub Total Price*/,
        // stot_disc: "10.00" /*Sub Total Discount*/,
        // stot_fprc: "40.00" /*Sub Total Final Price*/,
        // perd_bill: "Monthly" /*Period Billing*/,
        
        /* Reference Documents */
        numb_cntr: "10000GK99142" /*Contract No.*/,
        item_cntr: "0001" /*Contract Item*/,
        numb_sord: "200000014267" /*SO No.*/,
        item_sord: "0001" /*SO Item*/,
        numb_bill: "80000000042" /*Billing Number*/,
        item_bill: "0001" /*Billing Item*/,

        sytm_sint: "Active" /*Systems Status*/,

    },
    {
        /* Default of Systems */
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        /* License Item */
        idno_lord: "710099871423"  /*License Order*/ /* Integrate to Sales Order */,
        idno_item: "0002" /*Item No.*/,
        type_docs: "REG0" /*Document Type*/,
        type_lord: "NEW ORDER"  /*License Order Type*/,
        idno_skus: "67881" /*SKU No.*/,
        idno_prod: "2998-431" /*Product ID*/,
        numb_prod: "100000007864" /*Product No (Auto)*/,
        desc_shrt: "Storage 1TB" /*Short Description*/,
        idno_lcsn: "2200996152771" /*License No.*/,
        type_lcsn: "Additional-Storage" /*License Tye*/,
        type_apps: "Core Apps" /*Apps Type*/,
        name_apps: "Gyloop Business" /*Apps Name*/,
        date_pstr: "1 Jan 2025" /*Period Start Date*/,
        time_pstr: "18:00"  /*Period Start Time*/,
        date_pend: "31 Dec 2025" /*Periode End Date*/,
        time_pend: "18:00" /*Period End Time*/,
        code_cmpg: "N/1" /*Campaign Code*/,
        qnty_ordr: "1" /*Order Quantity*/,
        uoms_ordr: "TB" /*UoM*/,
        // perd_pric: "Monthly" /*Price Period*/,
        // code_curr: "USD" /*Currency*/,
        // unit_pric: "100.00" /*Unit Price*/,
        // dscp_pric: "0.00" /*Discount (%)*/,
        // dscu_pric: "0.00" /*Price Discount*/,
        // stot_pric: "100.00" /*Sub Total Price*/,
        // stot_disc: "0.00" /*Sub Total Discount*/,
        // stot_fprc: "100.00" /*Sub Total Final Price*/,
        // perd_bill: "Monthly" /*Period Billing*/,
        
        /* Reference Documents */
        numb_cntr: "10000GK99142" /*Contract No.*/,
        item_cntr: "0002" /*Contract Item*/,
        numb_sord: "200000014267" /*SO No.*/,
        item_sord: "0002" /*SO Item*/,
        numb_bill: "80000000042" /*Billing Number*/,
        item_bill: "0002" /*Billing Item*/,

        sytm_sint: "Active" /*Systems Status*/,

    },

]

const userLicenseItem = [
    {
        /* Default of Systems */
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        /* Reference Documents */
        idno_lord: "710099871422"  /*License Order*/,
        idno_item: "0001" /*Item No.*/,
        numb_cntr: "10000GK99142" /*Contract No.*/,
        item_cntr: "0001" /*Contract Item*/,
        numb_sord: "200000014251" /*SO No.*/,
        item_sord: "0001" /*SO Item*/,
        qnty_ordr: "1" /*Order Quantity*/,
        uoms_ordr: "Users" /*UoM*/,
        code_curr: "USD" /*Currency*/,
        unit_pric: "25.00" /*Unit Price*/,
        dscp_pric: "0.20" /*Discount (%)*/,
        dscu_pric: "5.00" /*Price Discount*/,
        stot_pric: "50.00" /*Sub Total Price*/,
        stot_disc: "10.00" /*Sub Total Discount*/,
        stot_fprc: "40.00" /*Sub Total Final Price*/,
    },
    {
        /* Default of Systems */
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        /* Reference Documents */
        numb_cntr: "10000GK99142" /*Contract No.*/,
        item_cntr: "0001" /*Contract Item*/,
        numb_sord: "200000014267" /*SO No.*/,
        item_sord: "0001" /*SO Item*/,
        qnty_ordr: "1" /*Order Quantity*/,
        uoms_ordr: "Users" /*UoM*/,
        code_curr: "USD" /*Currency*/,
        unit_pric: "25.00" /*Unit Price*/,
        dscp_pric: "0.20" /*Discount (%)*/,
        dscu_pric: "5.00" /*Price Discount*/,
        stot_pric: "50.00" /*Sub Total Price*/,
        stot_disc: "10.00" /*Sub Total Discount*/,
        stot_fprc: "40.00" /*Sub Total Final Price*/,

    },
]

export { userLicensesHeader };