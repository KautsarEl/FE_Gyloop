// Table Subscription_Invoice_Header
const subscriptionsInvoiceHeader = [
    {
        /* Default of Systems */
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        /* Billing Main Data */
        idno_bill: "7099771274662" /*Billing No.*/,
        type_bill: "BP02" /*Billing Type*/,
        desc_type: "Subscription Monthly Billing" /*Billing Type Short Description*/,
        desc_bill: "Monthly Billing PETROSEA (FEB 25)" /*Billing Description*/,
        date_bill: "23 Feb 2025" /*Billing Date*/,
        topy_pmnt: "30-Days" /*Term of Payments*/,
        date_dued: "23 Mar 2025" /*Due Date*/,
        date_docs: "31 Feb 2025" /*Document Date*/,
        is_prof: "No" /*Is Proforman Invoice*/,
        refr_bill: "-" /*Reference*/,

        /* Organization */
        idno_orgz: "62887008921" /*Organization ID*/,
        name_orgz: "Gramedia" /*Organization Name*/,
        legl_orgz: "PT Kompas Gramedia, Tbk." /*Organization Legal Name*/,

        /* Organization Address */
        code_addr: "Head Office" /*Address Code*/,
        addr_addr: "INDY Tower Building B" /*Address*/,
        addr_ln01: "Jl. Boulevard Bintaro Jaya Blok B7/A6" /*Address Street Line 1*/,
        addr_ln02: "" /*Address Street Line 2*/,
        addr_city: "Tangerang Selatan" /*City*/,
        addr_prov: "Banten" /*Province*/,
        addr_dist: "" /*Distric*/,
        addr_stat: "" /*State*/,
        addr_zipc: "15220" /*Postal Code*/,
        addr_cntr: "Indonesia" /*Country*/,
        pref_phon: "+62" /*Phone Prefix*/,
        addr_phon: "2186651432" /*Phone Number*/,
        addr_pext: "" /*Phone Extension*/,
        addr_webs: "www.petrosea.com" /*Website*/,
        code_tzon: "GMT+7" /*Time Zone*/,

        /* Bill-to-party */ 
        prty_bill: "62887000142" /*Bill-to-party*/,
        name_prty: "Petrosea" /*Bill-to-party Name*/,
        legl_prty: "PT Petrosea, Tbk." /*Bill-to-party Legal Name*/,

        /* Billing PIC */
        attn_bill: "John Andreas" /*Receiver (Bill-to-party)*/,
        salt_bill: "Mr." /*Receiver Salutation*/,
        post_attn: "VP Finance" /*Receiver Position*/,

        /* Billing Sender */
        attn_send: "Fuad John" /*Sender*/,
        salt_send: "Mr." /*Sender Salutation*/,
        post_send: "Executive Commercial" /*Position Sender*/,

        /* Bill-to-party Address */
        addr_prty: "Head Office" /*Billing Address Code*/,
        bill_addr: "INDY Tower Building B" /*Address*/,
        bill_ln01: "Jl. Boulevard Bintaro Jaya Blok B7/A6" /*Address Street Line 1*/,
        bill_ln02: "" /*Address Street Line 2*/,
        bill_city: "Tangerang Selatan" /*City*/,
        bill_prov: "Banten" /*Province*/,
        bill_dist: "" /*Distric*/,
        bill_stat: "" /*State*/,
        bill_zipc: "15220" /*Postal Code*/,
        bill_cntr: "Indonesia" /*Country*/,
        bill_pref: "+62" /*Phone Prefix*/,
        bill_phon: "2186651432" /*Phone Number*/,
        bill_pext: "" /*Phone Extension*/,
        bill_webs: "www.petrosea.com" /*Website*/,
        bill_tzon: "GMT+7" /*Time Zone*/,

        /* Configuration */
        cont_bill: "Sold-to-party" /*Billing Control*/,
        sold_bill: "62887000142" /*Sold-to-party*/,
        ship_bill: "-" /*Ship-to-party*/,

        /* Sold-to-party Address */
        addr_sold: "Head Office" /*Billing Address Code*/,
        sold_addr: "INDY Tower Building B" /*Address*/,
        sold_ln01: "Jl. Boulevard Bintaro Jaya Blok B7/A6" /*Address Street Line 1*/,
        sold_ln02: "" /*Address Street Line 2*/,
        sold_city: "Tangerang Selatan" /*City*/,
        sold_prov: "Banten" /*Province*/,
        sold_dist: "" /*Distric*/,
        sold_stat: "" /*State*/,
        sold_zipc: "15220" /*Postal Code*/,
        sold_cntr: "Indonesia" /*Country*/,
        sold_pref: "+62" /*Phone Prefix*/,
        sold_phon: "2186651432" /*Phone Number*/,
        sold_pext: "" /*Phone Extension*/,
        sold_webs: "www.petrosea.com" /*Website*/,
        sold_tzon: "GMT+7" /*Time Zone*/,

        /* Ship-to-party Address */
        addr_ship: "Head Office" /*Billing Address Code*/,
        ship_addr: "INDY Tower Building B" /*Address*/,
        ship_ln01: "Jl. Boulevard Bintaro Jaya Blok B7/A6" /*Address Street Line 1*/,
        ship_ln02: "" /*Address Street Line 2*/,
        ship_city: "Tangerang Selatan" /*City*/,
        ship_prov: "Banten" /*Province*/,
        ship_dist: "" /*Distric*/,
        ship_stat: "" /*State*/,
        ship_zipc: "15220" /*Postal Code*/,
        ship_cntr: "Indonesia" /*Country*/,
        ship_pref: "+62" /*Phone Prefix*/,
        ship_phon: "2186651432" /*Phone Number*/,
        ship_pext: "" /*Phone Extension*/,
        ship_webs: "www.petrosea.com" /*Website*/,
        ship_tzon: "GMT+7" /*Time Zone*/,

        /* Commercial */
        code_curr: "USD" /*Billing Currency*/,
        amnt_st10: "10.000,00" /*Sub Total Amount*/,
        rate_disc: "20%" /*Discount (%)*/,
        amnt_st01: "2.000,00" /*Sub Total Discount*/,
        amnt_st20: "8.000" /*Sub Total Amount after Discount*/,
        code_taxd: "V11" /*Tax Code*/,
        rate_taxd: "11%" /*Tax Rate*/,
        amnt_taxd: "880" /*Tax Amount*/,
        amnt_st30: "8.880" /*Total Amount (Final)*/,

        /*  Outstanding */
        is_dpmn: "No" /*Down Payment Exist*/,
        idno_dpmn: "-" /*Down Payment Number (Billing No.)*/,
        curr_dpmn: "-" /*Currency Down Payment*/,
        amnt_dpmn: "-" /* */,
        amnt_outs: "8.880" /*Outstanding Amount*/,

        /* Notes */
        long_desc: "Pembayaran harap dilakukan segera setelah diterima invoice ini" /*Long Descriptions*/,

        /* Payment */
        isnt_pmnt: "Payment Instruction..."  /*Payment Instruction*/,
        mtde_pmnt: "Wire-Transfer" /*Payment Method*/,
        name_bank: "Mandiri" /*Bank Name*/,
        accn_bank: "1170000291286" /*Bank Account*/, 
        name_accn: "PT Kompas Gramedia, Tbk." /*Account Name */,
        code_qris: "-" /*QRIS Code*/,
        pmnt_sint: "Unpaid" /*Payment Status*/,
        idno_pmnt: "-" /*g*/,

        /* System Status */
        sytm_sint: "Active" /*Systems Status*/,

        //General log data (please copy to all data)
        numb_objt: "62887000142" /*Object Number*/,
        type_objt: "SubscriptionInvoices" /*Object Type*/,
        is_appr: "" /*Use Approval?*/,
        appr_numb: "" /*Approval Number*/,
        is_fapp: "" /*Is Final Approved?*/,
        is_inac: "" /*Is Inactive?*/,
        inac_by: "" /*Inactivated By*/,
        is_lock: "" /*Is Locked?*/,
        lock_by: "" /*Locked By*/,
        is_dele: "" /*Is Deleted?*/,
        dele_by: "" /*Deleted By*/,
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        date_crdt: "2 February 2025" /*Created Date (System)*/,
        date_crdx: "2 February 2025" /*Created Date (User Time Zone)*/,
        time_crdt: "18:00" /*Created Time (System)*/,
        time_crdx: "15:00" /*Created Time (User Time Zone)*/,
        crdt_by: "Joko.Marwinto@petrosea.com" /*Created By*/,
        date_updt: "2 February 2025" /*Updated Date (System)*/,
        date_updx: "2 February 2025" /*Updated Date (User Time Zone)*/,
        time_updt: "18:00" /*Updated Time (System)*/,
        time_updx: "15:00" /*Updated Time (User Time Zone)*/,
        updt_by: "Joko.Marwinto@petrosea.com" /*Updated By*/,

    },
    {
        /* Default of Systems */
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        /* Billing Main Data */
        idno_bill: "7099771274512" /*Billing No.*/,
        type_bill: "BP02" /*Billing Type*/,
        desc_type: "Subscription Monthly Billing" /*Billing Type Short Description*/,
        desc_bill: "Monthly Billing PETROSEA (JAN 25)" /*Billing Description*/,
        date_bill: "23 Jan 2025" /*Billing Date*/,
        topy_pmnt: "30-Days" /*Term of Payments*/,
        date_dued: "23 Feb 2025" /*Due Date*/,
        date_docs: "31 Jan 2025" /*Document Date*/,
        is_prof: "No" /*Is Proforman Invoice*/,
        refr_bill: "-" /*Reference*/,

        /* Organization */
        idno_orgz: "62887008921" /*Organization ID*/,
        name_orgz: "Gramedia" /*Organization Name*/,
        legl_orgz: "PT Kompas Gramedia, Tbk." /*Organization Legal Name*/,

        /* Organization Address */
        code_addr: "Head Office" /*Address Code*/,
        addr_addr: "INDY Tower Building B" /*Address*/,
        addr_ln01: "Jl. Boulevard Bintaro Jaya Blok B7/A6" /*Address Street Line 1*/,
        addr_ln02: "" /*Address Street Line 2*/,
        addr_city: "Tangerang Selatan" /*City*/,
        addr_prov: "Banten" /*Province*/,
        addr_dist: "" /*Distric*/,
        addr_stat: "" /*State*/,
        addr_zipc: "15220" /*Postal Code*/,
        addr_cntr: "Indonesia" /*Country*/,
        pref_phon: "+62" /*Phone Prefix*/,
        addr_phon: "2186651432" /*Phone Number*/,
        addr_pext: "" /*Phone Extension*/,
        addr_webs: "www.petrosea.com" /*Website*/,
        code_tzon: "GMT+7" /*Time Zone*/,

        /* Bill-to-party */ 
        prty_bill: "62887000142" /*Bill-to-party*/,
        name_prty: "Petrosea" /*Bill-to-party Name*/,
        legl_prty: "PT Petrosea, Tbk." /*Bill-to-party Legal Name*/,

        /* Billing PIC */
        attn_bill: "John Andreas" /*Receiver (Bill-to-party)*/,
        salt_bill: "Mr." /*Receiver Salutation*/,
        post_attn: "VP Finance" /*Receiver Position*/,

        /* Billing Sender */
        attn_send: "Fuad John" /*Sender*/,
        salt_send: "Mr." /*Sender Salutation*/,
        post_send: "Executive Commercial" /*Position Sender*/,

        /* Bill-to-party Address */
        addr_prty: "Head Office" /*Billing Address Code*/,
        bill_addr: "INDY Tower Building B" /*Address*/,
        bill_ln01: "Jl. Boulevard Bintaro Jaya Blok B7/A6" /*Address Street Line 1*/,
        bill_ln02: "" /*Address Street Line 2*/,
        bill_city: "Tangerang Selatan" /*City*/,
        bill_prov: "Banten" /*Province*/,
        bill_dist: "" /*Distric*/,
        bill_stat: "" /*State*/,
        bill_zipc: "15220" /*Postal Code*/,
        bill_cntr: "Indonesia" /*Country*/,
        bill_pref: "+62" /*Phone Prefix*/,
        bill_phon: "2186651432" /*Phone Number*/,
        bill_pext: "" /*Phone Extension*/,
        bill_webs: "www.petrosea.com" /*Website*/,
        bill_tzon: "GMT+7" /*Time Zone*/,

        /* Configuration */
        cont_bill: "Sold-to-party" /*Billing Control*/,
        sold_bill: "62887000142" /*Sold-to-party*/,
        ship_bill: "-" /*Ship-to-party*/,

        /* Sold-to-party Address */
        addr_sold: "Head Office" /*Billing Address Code*/,
        sold_addr: "INDY Tower Building B" /*Address*/,
        sold_ln01: "Jl. Boulevard Bintaro Jaya Blok B7/A6" /*Address Street Line 1*/,
        sold_ln02: "" /*Address Street Line 2*/,
        sold_city: "Tangerang Selatan" /*City*/,
        sold_prov: "Banten" /*Province*/,
        sold_dist: "" /*Distric*/,
        sold_stat: "" /*State*/,
        sold_zipc: "15220" /*Postal Code*/,
        sold_cntr: "Indonesia" /*Country*/,
        sold_pref: "+62" /*Phone Prefix*/,
        sold_phon: "2186651432" /*Phone Number*/,
        sold_pext: "" /*Phone Extension*/,
        sold_webs: "www.petrosea.com" /*Website*/,
        sold_tzon: "GMT+7" /*Time Zone*/,

        /* Ship-to-party Address */
        addr_ship: "Head Office" /*Billing Address Code*/,
        ship_addr: "INDY Tower Building B" /*Address*/,
        ship_ln01: "Jl. Boulevard Bintaro Jaya Blok B7/A6" /*Address Street Line 1*/,
        ship_ln02: "" /*Address Street Line 2*/,
        ship_city: "Tangerang Selatan" /*City*/,
        ship_prov: "Banten" /*Province*/,
        ship_dist: "" /*Distric*/,
        ship_stat: "" /*State*/,
        ship_zipc: "15220" /*Postal Code*/,
        ship_cntr: "Indonesia" /*Country*/,
        ship_pref: "+62" /*Phone Prefix*/,
        ship_phon: "2186651432" /*Phone Number*/,
        ship_pext: "" /*Phone Extension*/,
        ship_webs: "www.petrosea.com" /*Website*/,
        ship_tzon: "GMT+7" /*Time Zone*/,

        /* Ship-to-party Address */
        addr_ship: "Head Office" /*Billing Address Code*/,
        ship_addr: "INDY Tower Building B" /*Address*/,
        ship_ln01: "Jl. Boulevard Bintaro Jaya Blok B7/A6" /*Address Street Line 1*/,
        ship_ln02: "" /*Address Street Line 2*/,
        ship_city: "Tangerang Selatan" /*City*/,
        ship_prov: "Banten" /*Province*/,
        ship_dist: "" /*Distric*/,
        ship_stat: "" /*State*/,
        ship_zipc: "15220" /*Postal Code*/,
        ship_cntr: "Indonesia" /*Country*/,
        ship_phon: "+62" /*Phone Prefix*/,
        ship_phon: "2186651432" /*Phone Number*/,
        ship_pext: "" /*Phone Extension*/,
        ship_webs: "www.petrosea.com" /*Website*/,
        ship_tzon: "GMT+7" /*Time Zone*/,

        /* Commercial */
        code_curr: "USD" /*Billing Currency*/,
        amnt_st10: "10.000,00" /*Sub Total Amount*/,
        rate_disc: "20%" /*Discount (%)*/,
        amnt_st01: "2.000,00" /*Sub Total Discount*/,
        amnt_st20: "8.000" /*Sub Total Amount after Discount*/,
        code_taxd: "V11" /*Tax Code*/,
        rate_taxd: "11%" /*Tax Rate*/,
        amnt_taxd: "880" /*Tax Amount*/,
        amnt_st30: "8.880" /*Total Amount (Final)*/,

        /*  Outstanding */
        is_dpmn: "No" /*Down Payment Exist*/,
        idno_dpmn: "-" /*Down Payment Number (Billing No.)*/,
        curr_dpmn: "-" /*Currency Down Payment*/,
        amnt_dpmn: "-" /* */,
        amnt_outs: "8.880" /*Outstanding Amount*/,

        /* Notes */
        long_desc: "Pembayaran harap dilakukan segera setelah diterima invoice ini" /* Long Descriptions */,

        /* Payment */
        isnt_pmnt: "Payment Instruction..."  /*Payment Instruction*/,
        mtde_pmnt: "Wire-Transfer" /*Payment Method*/,
        name_bank: "Mandiri" /*Bank Name*/,
        accn_bank: "1170000291286" /*Bank Account*/, 
        name_accn: "PT Kompas Gramedia, Tbk." /*Account Name */,
        code_qris: "-" /*QRIS Code*/,
        pmnt_sint: "Paid" /*Payment Status*/,
        idno_pmnt: "887652299999977714" /*Payment Number*/,

        /* System Status */
        sytm_sint: "Active" /*Systems Status*/,

        //General log data (please copy to all data)
        numb_objt: "62887000142" /*Object Number*/,
        type_objt: "SubscriptionInvoices" /*Object Type*/,
        is_appr: "" /*Use Approval?*/,
        appr_numb: "" /*Approval Number*/,
        is_fapp: "" /*Is Final Approved?*/,
        is_inac: "" /*Is Inactive?*/,
        inac_by: "" /*Inactivated By*/,
        is_lock: "" /*Is Locked?*/,
        lock_by: "" /*Locked By*/,
        is_dele: "" /*Is Deleted?*/,
        dele_by: "" /*Deleted By*/,
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        date_crdt: "2 February 2025" /*Created Date (System)*/,
        date_crdx: "2 February 2025" /*Created Date (User Time Zone)*/,
        time_crdt: "18:00" /*Created Time (System)*/,
        time_crdx: "15:00" /*Created Time (User Time Zone)*/,
        crdt_by: "Joko.Marwinto@petrosea.com" /*Created By*/,
        date_updt: "2 February 2025" /*Updated Date (System)*/,
        date_updx: "2 February 2025" /*Updated Date (User Time Zone)*/,
        time_updt: "18:00" /*Updated Time (System)*/,
        time_updx: "15:00" /*Updated Time (User Time Zone)*/,
        updt_by: "Joko.Marwinto@petrosea.com" /*Updated By*/,

    }
]


const subscriptionsInvoiceItem = [
    {
        /* Default of Systems */
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        /* Billing Main Data */
        idno_bill: "7099771274662" /*Billing No.*/,
        idno_item: "0001" /*Billing Items*/,
        idno_skus: "31542" /*SKU No.*/,
        idno_prod: "2998-001" /*Product ID*/,
        numb_prod: "100000001021" /*Product No (Auto)*/,
        desc_shrt: "Professional-User" /*Short Description*/,
        grop_prod: "License-User" /*Product Group*/,
        qnty_ordr: "1" /*Order Quantity*/,
        uoms_ordr: "Users" /*UoM*/,
        code_curr: "USD" /*Currency*/,
        unit_pric: "25.00" /*Unit Price*/,
        rate_disc: "20.00%" /*Discount (%)*/,
        unit_disc: "5.00" /*Unit Discount*/,
        amnt_st10: "50.00" /*Sub Total Price*/,
        amnt_st01: "10.00" /*Sub Total Discount*/,
        amnt_st20: "40.00" /*Sub Total Amount*/,
        
        /* Reference Documents */
        idno_lord: "710099871422"  /*License Order*/,
        idno_item: "0001" /*Item No.*/,
        numb_cntr: "10000GK99142" /*Contract No.*/,
        item_cntr: "0001" /*Contract Item*/,
        numb_sord: "200000014251" /*SO No.*/,
        item_sord: "0001" /*SO Item*/,

        /* System Status */
        sytm_sint: "Active" /*Systems Status*/,

        //General log data (please copy to all data)
        numb_objt: "628870001420001" /*Object Number*/,
        type_objt: "SubscriptionInvoicesItems" /*Object Type*/,
        is_appr: "" /*Use Approval?*/,
        appr_numb: "" /*Approval Number*/,
        is_fapp: "" /*Is Final Approved?*/,
        is_inac: "" /*Is Inactive?*/,
        inac_by: "" /*Inactivated By*/,
        is_lock: "" /*Is Locked?*/,
        lock_by: "" /*Locked By*/,
        is_dele: "" /*Is Deleted?*/,
        dele_by: "" /*Deleted By*/,
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        date_crdt: "2 February 2025" /*Created Date (System)*/,
        date_crdx: "2 February 2025" /*Created Date (User Time Zone)*/,
        time_crdt: "18:00" /*Created Time (System)*/,
        time_crdx: "15:00" /*Created Time (User Time Zone)*/,
        crdt_by: "Joko.Marwinto@petrosea.com" /*Created By*/,
        date_updt: "2 February 2025" /*Updated Date (System)*/,
        date_updx: "2 February 2025" /*Updated Date (User Time Zone)*/,
        time_updt: "18:00" /*Updated Time (System)*/,
        time_updx: "15:00" /*Updated Time (User Time Zone)*/,
        updt_by: "Joko.Marwinto@petrosea.com" /*Updated By*/,
    },{
        /* Default of Systems */
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        /* Billing Main Data */
        idno_bill: "7099771274662" /*Billing No.*/,
        idno_item: "0002" /*Billing Items*/,
        idno_skus: "31542" /*SKU No.*/,
        idno_prod: "2998-001" /*Product ID*/,
        numb_prod: "100000001021" /*Product No (Auto)*/,
        desc_shrt: "Professional-User" /*Short Description*/,
        grop_prod: "License-User" /*Product Group*/,
        qnty_ordr: "1" /*Order Quantity*/,
        uoms_ordr: "Users" /*UoM*/,
        code_curr: "USD" /*Currency*/,
        unit_pric: "25.00" /*Unit Price*/,
        rate_disc: "20.00%" /*Discount (%)*/,
        unit_disc: "5.00" /*Unit Discount*/,
        amnt_st10: "50.00" /*Sub Total Price*/,
        amnt_st01: "10.00" /*Sub Total Discount*/,
        amnt_st20: "40.00" /*Sub Total Amount*/,
        
        /* Reference Documents */
        idno_lord: "710099871422"  /*License Order*/,
        idno_item: "0001" /*Item No.*/,
        numb_cntr: "10000GK99142" /*Contract No.*/,
        item_cntr: "0001" /*Contract Item*/,
        numb_sord: "200000014251" /*SO No.*/,
        item_sord: "0001" /*SO Item*/,

        /* System Status */
        sytm_sint: "Active" /*Systems Status*/,

        //General log data (please copy to all data)
        numb_objt: "628870001420001" /*Object Number*/,
        type_objt: "SubscriptionInvoicesItems" /*Object Type*/,
        is_appr: "" /*Use Approval?*/,
        appr_numb: "" /*Approval Number*/,
        is_fapp: "" /*Is Final Approved?*/,
        is_inac: "" /*Is Inactive?*/,
        inac_by: "" /*Inactivated By*/,
        is_lock: "" /*Is Locked?*/,
        lock_by: "" /*Locked By*/,
        is_dele: "" /*Is Deleted?*/,
        dele_by: "" /*Deleted By*/,
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        date_crdt: "2 February 2025" /*Created Date (System)*/,
        date_crdx: "2 February 2025" /*Created Date (User Time Zone)*/,
        time_crdt: "18:00" /*Created Time (System)*/,
        time_crdx: "15:00" /*Created Time (User Time Zone)*/,
        crdt_by: "Joko.Marwinto@petrosea.com" /*Created By*/,
        date_updt: "2 February 2025" /*Updated Date (System)*/,
        date_updx: "2 February 2025" /*Updated Date (User Time Zone)*/,
        time_updt: "18:00" /*Updated Time (System)*/,
        time_updx: "15:00" /*Updated Time (User Time Zone)*/,
        updt_by: "Joko.Marwinto@petrosea.com" /*Updated By*/,
    },
    {
        /* Default of Systems */
        indx: "3" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        /* Billing Main Data */
        idno_bill: "7099771274512" /*Billing No.*/,
        idno_item: "0001" /*Billing Items*/,
        idno_skus: "31542" /*SKU No.*/,
        idno_prod: "2998-001" /*Product ID*/,
        numb_prod: "100000001021" /*Product No (Auto)*/,
        desc_shrt: "Professional-User" /*Short Description*/,
        grop_prod: "License-User" /*Product Group*/,
        qnty_ordr: "1" /*Order Quantity*/,
        uoms_ordr: "Users" /*UoM*/,
        code_curr: "USD" /*Currency*/,
        unit_pric: "25.00" /*Unit Price*/,
        rate_disc: "20.00%" /*Discount (%)*/,
        unit_disc: "5.00" /*Unit Discount*/,
        amnt_st10: "50.00" /*Sub Total Price*/,
        amnt_st01: "10.00" /*Sub Total Discount*/,
        amnt_st20: "40.00" /*Sub Total Amount*/,
        
        /* Reference Documents */
        idno_lord: "710099871422"  /*License Order*/,
        idno_item: "0001" /*Item No.*/,
        numb_cntr: "10000GK99142" /*Contract No.*/,
        item_cntr: "0001" /*Contract Item*/,
        numb_sord: "200000014251" /*SO No.*/,
        item_sord: "0001" /*SO Item*/,

        /* System Status */
        sytm_sint: "Active" /*Systems Status*/,

        //General log data (please copy to all data)
        numb_objt: "628870001420001" /*Object Number*/,
        type_objt: "SubscriptionInvoicesItems" /*Object Type*/,
        is_appr: "" /*Use Approval?*/,
        appr_numb: "" /*Approval Number*/,
        is_fapp: "" /*Is Final Approved?*/,
        is_inac: "" /*Is Inactive?*/,
        inac_by: "" /*Inactivated By*/,
        is_lock: "" /*Is Locked?*/,
        lock_by: "" /*Locked By*/,
        is_dele: "" /*Is Deleted?*/,
        dele_by: "" /*Deleted By*/,
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        date_crdt: "2 February 2025" /*Created Date (System)*/,
        date_crdx: "2 February 2025" /*Created Date (User Time Zone)*/,
        time_crdt: "18:00" /*Created Time (System)*/,
        time_crdx: "15:00" /*Created Time (User Time Zone)*/,
        crdt_by: "Joko.Marwinto@petrosea.com" /*Created By*/,
        date_updt: "2 February 2025" /*Updated Date (System)*/,
        date_updx: "2 February 2025" /*Updated Date (User Time Zone)*/,
        time_updt: "18:00" /*Updated Time (System)*/,
        time_updx: "15:00" /*Updated Time (User Time Zone)*/,
        updt_by: "Joko.Marwinto@petrosea.com" /*Updated By*/,
    },{
        /* Default of Systems */
        indx: "4" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,
        
        /* Billing Main Data */
        idno_bill: "7099771274512" /*Billing No.*/,
        idno_item: "0002" /*Billing Items*/,
        idno_skus: "31542" /*SKU No.*/,
        idno_prod: "2998-001" /*Product ID*/,
        numb_prod: "100000001021" /*Product No (Auto)*/,
        desc_shrt: "Professional-User" /*Short Description*/,
        grop_prod: "License-User" /*Product Group*/,
        qnty_ordr: "1" /*Order Quantity*/,
        uoms_ordr: "Users" /*UoM*/,
        code_curr: "USD" /*Currency*/,
        unit_pric: "25.00" /*Unit Price*/,
        rate_disc: "20.00%" /*Discount (%)*/,
        unit_disc: "5.00" /*Unit Discount*/,
        amnt_st10: "50.00" /*Sub Total Price*/,
        amnt_st01: "10.00" /*Sub Total Discount*/,
        amnt_st20: "40.00" /*Sub Total Amount*/,
        
        /* Reference Documents */
        idno_lord: "710099871422"  /*License Order*/,
        idno_item: "0001" /*Item No.*/,
        numb_cntr: "10000GK99142" /*Contract No.*/,
        item_cntr: "0001" /*Contract Item*/,
        numb_sord: "200000014251" /*SO No.*/,
        item_sord: "0001" /*SO Item*/,

        /* System Status */
        sytm_sint: "Active" /*Systems Status*/,

        //General log data (please copy to all data)
        numb_objt: "628870001420001" /*Object Number*/,
        type_objt: "SubscriptionInvoicesItems" /*Object Type*/,
        is_appr: "" /*Use Approval?*/,
        appr_numb: "" /*Approval Number*/,
        is_fapp: "" /*Is Final Approved?*/,
        is_inac: "" /*Is Inactive?*/,
        inac_by: "" /*Inactivated By*/,
        is_lock: "" /*Is Locked?*/,
        lock_by: "" /*Locked By*/,
        is_dele: "" /*Is Deleted?*/,
        dele_by: "" /*Deleted By*/,
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        date_crdt: "2 February 2025" /*Created Date (System)*/,
        date_crdx: "2 February 2025" /*Created Date (User Time Zone)*/,
        time_crdt: "18:00" /*Created Time (System)*/,
        time_crdx: "15:00" /*Created Time (User Time Zone)*/,
        crdt_by: "Joko.Marwinto@petrosea.com" /*Created By*/,
        date_updt: "2 February 2025" /*Updated Date (System)*/,
        date_updx: "2 February 2025" /*Updated Date (User Time Zone)*/,
        time_updt: "18:00" /*Updated Time (System)*/,
        time_updx: "15:00" /*Updated Time (User Time Zone)*/,
        updt_by: "Joko.Marwinto@petrosea.com" /*Updated By*/,
    },
]


export { subscriptionsInvoiceHeader, subscriptionsInvoiceItem };