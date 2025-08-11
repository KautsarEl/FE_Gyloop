// Table ID : masterdata.product.id
// Short Description : Master Data Product ID
// Type : Transparent Table
// Notes: Core Master Data Product Table
const masterdata_product_id = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data: Product Identity
        type_prod: "KM03" /*Product Type*/,
        prof_prod: "9870" /*Product Profile*/,
        idno_prod: "KM1982-39842" /*Product ID*/,
        numb_prod: "199900000000142552" /*Product Number (Auto Generate)*/,
        idno_artc: "" /*Article Number*/,
        idno_skus: "" /*SKU Number*/,
        idno_intr: "" /*Internal Number*/,
        idno_refr: "" /*Reference Number*/,
        idno_mpnn: "PC987721" /*Manufacturing Part Number*/,
        desc_shrt: "Komatsu PC-200 Engine" /*Short Description*/,
        fnam_imag: "http://petrosea.com/image.jpg" /*Product Image URL*/,
        bran_prod: "KOMATSU" /*Product Brand*/,
        code_xbar: "" /*Barcode*/,
        code_xqrc: "" /*QR Code*/,
        is_long: "NO" /*Is Use Long Desc.*/,
        desc_long: "" /*Long Description*/,
        is_tags: "YES" /*Is Use Tags*/,
        prod_tags: "KOMATSU, BESTTOP, JAPAN" /*Product Tags*/,

        // Main Data: Product Classification
        char_prod: "1100" /*Product Characteristic*/,
        catg_prod: "0991" /*Product Category*/,
        type_prod_in: "Fast Moving Products" /*Internal Product Type*/,
        grop_prod: "Components" /*Product Group*/,
        grop_prod_in: "Mini Components" /*Internal Product Group*/,
        clas_prod: "Engine" /*Product Class*/,
        modl_prod: "PC-200" /*Product Model*/,
        sers_prod: "200" /*Product Series*/,
        
        // Logs Data
        numb_objt: "KM1982-39842", /*Object Number*/
        type_objt: "ProductID", /*Object Type*/
        name_tabl: "masterdata.product.id"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    }
]

// Table ID : config.object.tags
// Short Description : Configuration Object Tags
// Type : Transparent Table
// Notes: User for Selection of Object Tags
const config_object_tags = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_tags: "BESTTOP" /*Tags Code*/,
        desc_shrt: "Best Top" /*Short Description*/,
        assg_objt: "General" /*Assignment Object*/,/*Option: General, Product, Customer, Vendor, etc*/

        // Logs Data
        numb_objt: "BESTTOP", /*Object Number*/
        type_objt: "ConfigObjectTags", /*Object Type*/
        name_tabl: "config.object.tags"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    }
]

// Table ID : config.object.tags.trfq
// Short Description : Configuration Object Tags
// Type : Transparent Table
// Notes: User for Selection of Object Tags
const config_object_tags_trfq = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_tags: "KOMATSU" /*Tags Code*/,
        desc_shrt: "Komatsu" /*Short Description*/,
        assg_objt: "General" /*Assignment Object*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    }
]

// Table ID : object.tags.assignment
// Short Description : Object Tags Assignment
// Type : Transparent Table
// Notes: Assignment of Tags to Object
const object_tags_assignment = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        numb_objt: "KM1982-39842" /*Object ID*/,
        assg_objt: "masterdata.product.id" /*Assignment Object*/,
        code_tags: "BESTTOP" /*Tags Code*/,

        // Logs Data
        numb_objt: "KM1982-39842", /*Object Number*/
        type_objt: "ObjectTagsAssignment", /*Object Type*/
        name_tabl: "object.tags.assignment"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        numb_objt: "KM1982-39842" /*Object ID*/,
        type_objt: "ProductID" /*Object Type*/,
        code_tags: "KOMATSU" /*Tags Code*/,

        // Logs Data
        numb_objt: "KM1982-39842", /*Object Number*/
        type_objt: "ObjectTagsAssignment", /*Object Type*/
        name_tabl: "object.tags.assignment"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
]

// Table ID : config.product.type
// Short Description : Configuration Product Type
// Type : Transparent Table
// Notes: User for Selection of Product Type
const config_product_type = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        type_prod: "KM03" /*Product Type*/,
        desc_shrt: "Spare Parts Stock Product" /*Short Description*/,

        // Assignment
        char_prod: "1100" /*Product Characteristic*/,

        // Logs Data
        numb_objt: "KM03", /*Object Number*/
        type_objt: "ConfigProductType", /*Object Type*/
        name_tabl: "config.product.type"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_type: "KM04" /*Product Type Code*/,
        desc_shrt: "Spare Parts Non Stock Product" /*Short Description*/,

        // Assignment
        code_char: "1101" /*Product Characteristic Code*/,

        // Logs Data
        numb_objt: "KM04", /*Object Number*/
        type_objt: "ConfigProductType", /*Object Type*/
        name_tabl: "config.product.type"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
]

// Table ID : config.product.type.trq
// Short Description : Configuration Product Type
// Type : Transparent Table
// Notes: User for Selection of Product Type
const config_product_type_trfq = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_type: "KM03" /*Product Type Code*/,
        desc_shrt: "Spare Parts Stock Product" /*Short Description*/,
        code_char: "KMPO" /*Product Characteristic Code*/,

        // Assignment
        code_char: "1100" /*Product Characteristic Code*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_type: "KM04" /*Product Type Code*/,
        desc_shrt: "Spare Parts Non Stock Product" /*Short Description*/,

        // Assignment
        code_char: "1100" /*Product Characteristic Code*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
]

// Table ID : config.product.profile
// Short Description : Configuration Product Profile
// Type : Transparent Table
// Notes: User for Selection of Product Profile
const config_product_profile = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_prof: "9870" /*Product Profile Code*/,
        name_prof: "Internal Product Profile" /*Product Profile Name*/,

        // Assignment
        code_char: "1100" /*Product Characteristic Code*/,

        // Logs Data
        numb_objt: "9870", /*Object Number*/
        type_objt: "ConfigProductProfile", /*Object Type*/
        name_tabl: "config.product.profile"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_prof: "9871" /*Product Profile Code*/,
        name_prof: "External Product Profile" /*Product Profile Name*/,

        // Assignment
        code_char: "1100" /*Product Characteristic Code*/,

        // Logs Data
        numb_objt: "9871", /*Object Number*/
        type_objt: "ConfigProductProfile", /*Object Type*/
        name_tabl: "config.product.profile"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    }
]

// Table ID : config.product.profile.trfq
// Short Description : Configuration Product Profile
// Type : Transparent Table
// Notes: User for Selection of Product Profile
const config_product_profile_trfq = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_prof: "9870" /*Product Profile Code*/,
        name_prof: "Internal Product Profile" /*Product Profile Name*/,

        // Assignment
        code_char: "1100" /*Product Characteristic Code*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_prof: "9871" /*Product Profile Code*/,
        name_prof: "External Product Profile" /*Product Profile Name*/,

        // Assignment
        code_char: "1100" /*Product Characteristic Code*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    }
]

// Table ID : config.brand.id
// Short Description : Configuration Brand ID
// Type : Transparent Table
// Notes: User for Selection of Brand ID
const config_brand_id = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_bran: "KOMATSU" /*Brand Code*/,
        name_bran: "Komatsu" /*Brand Name*/,

        // Logs Data
        numb_objt: "KOMATSU", /*Object Number*/
        type_objt: "ConfigBrandId", /*Object Type*/
        name_tabl: "config.brand.id"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_bran: "CATERPILLAR" /*Brand Code*/,
        name_bran: "Caterpillar" /*Brand Name*/,

        // Logs Data
        numb_objt: "CATERPILLAR", /*Object Number*/
        type_objt: "ConfigBrandId", /*Object Type*/
        name_tabl: "config.brand.id"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
]

// Table ID : config.brand.id.trfq
// Short Description : Configuration Brand ID
// Type : Transparent Table
// Notes: User for Selection of Brand ID
const config_brand_id_trfq = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_bran: "KOMATSU" /*Brand Code*/,
        name_bran: "Komatsu" /*Brand Name*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_bran: "CATERPILLAR" /*Brand Code*/,
        name_bran: "Caterpillar" /*Brand Name*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
]

// Table ID : config.product.characteristic
// Short Description : Configuration Product Characteristic
// Type : Transparent Table
// Notes: User for Selection of Product Characteristic
const config_product_characteristic = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        char_prod: "1100" /*Product Characteristic Code*/,
        name_char: "Stock Product" /*Product Characteristic Name*/,
        form_char: "Physical Stock Product" /*Characteristic Form*/, /*Option: Valuable Physical Stock Product, Non-Valuable Physical Stock Product, Physical Non Stock Product, Consumable Product, Service Product, Asset etc*/

        // Logs Data
        numb_objt: "1100", /*Object Number*/
        type_objt: "ConfigProductCharacteristic", /*Object Type*/
        name_tabl: "config.product.characteristic"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        char_prod: "1200" /*Product Characteristic Code*/,
        desc_shrt: "Non Stock Product" /*Product Characteristic Name*/,
        form_char: "Physical Non Stock Product" /*Characteristic Form*/,

        // Logs Data
        numb_objt: "1200", /*Object Number*/
        type_objt: "ConfigProductCharacteristic", /*Object Type*/
        name_tabl: "config.product.characteristic"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
]

// Table ID : config.product.characteristic.trfq
// Short Description : Configuration Product Characteristic
// Type : Transparent Table
// Notes: User for Selection of Product Characteristic
const config_product_characteristic_trfq = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_char: "1100" /*Product Characteristic Code*/,
        name_char: "Stock Product" /*Product Characteristic Name*/,
        form_char: "Physical Stock Product" /*Characteristic Form*/, /*Option: Valuable Physical Stock Product, Non-Valuable Physical Stock Product, Physical Non Stock Product, Consumable Product, Service Product, Asset etc*/

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_char: "1100" /*Product Characteristic Code*/,
        name_char: "Non Stock Product" /*Product Characteristic Name*/,
        form_char: "Physical Non Stock Product" /*Characteristic Form*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
]

// Table ID : config.product.category
// Short Description : Configuration Product Category   
// Type : Transparent Table
// Notes: User for Selection of Product Category
const config_product_category = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_catg: "10" /*Product Category Code*/,
        name_catg: "Components" /*Product Category Name*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/

        // Logs Data
        numb_objt: "10", /*Object Number*/
        type_objt: "ConfigProductCategory", /*Object Type*/
        name_tabl: "config.product.category"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_catg: "1010" /*Product Category Code*/,
        name_catg: "Major Component" /*Product Category Name*/,

        // Logs Data
        numb_objt: "1010", /*Object Number*/
        type_objt: "ConfigProductCategory", /*Object Type*/
        name_tabl: "config.product.category"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        indx: "3" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_catg: "1020" /*Product Category Code*/,
        name_catg: "Minor Component" /*Product Category Name*/,

        // Logs Data
        numb_objt: "1020", /*Object Number*/
        type_objt: "ConfigProductCategory", /*Object Type*/
        name_tabl: "config.product.category"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
]

// Table ID : config.product.category.trfq
// Short Description : Configuration Product Category   
// Type : Transparent Table
// Notes: User for Selection of Product Category
const config_product_category_trfq = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_catg: "10" /*Product Category Code*/,
        name_catg: "Components" /*Product Category Name*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
    {
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_catg: "1010" /*Product Category Code*/,
        name_catg: "Major Component" /*Product Category Name*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
    {
        indx: "3" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_catg: "1020" /*Product Category Code*/,
        name_catg: "Minor Component" /*Product Category Name*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
]

// Table ID : config.product.group
// Short Description : Configuration Product Group
// Type : Transparent Table
// Notes: User for Selection of Product Group
const config_product_group = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_grop: "101" /*Product Group Code*/,
        name_grop: "Mini Components" /*Product Group Name*/,

        // Logs Data
        numb_objt: "101", /*Object Number*/
        type_objt: "ConfigProductGroup", /*Object Type*/
        name_tabl: "config.product.group"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_grop: "102" /*Product Group Code*/,
        name_grop: "Major Components" /*Product Group Name*/,

        // Logs Data
        numb_objt: "102", /*Object Number*/
        type_objt: "ConfigProductGroup", /*Object Type*/
        name_tabl: "config.product.group"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        // Indexing
        indx: "3" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_grop: "103" /*Product Group Code*/,
        name_grop: "Minor Components" /*Product Group Name*/,

        // Logs Data
        numb_objt: "103", /*Object Number*/
        type_objt: "ConfigProductGroup", /*Object Type*/
        name_tabl: "config.product.group"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
]

// Table ID : config.product.group.trfq
// Short Description : Configuration Product Group
// Type : Transparent Table
// Notes: User for Selection of Product Group
const config_product_group_trfq = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_grop: "10" /*Product Group Code*/,
        name_grop: "Mini Components" /*Product Group Name*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_grop: "1010" /*Product Group Code*/,
        name_grop: "Major Components" /*Product Group Name*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
    {
        // Indexing
        indx: "3" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_grop: "1020" /*Product Group Code*/,
        name_grop: "Minor Components" /*Product Group Name*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
]

// Table ID : config.product.class
// Short Description : Configuration Product Class
// Type : Transparent Table
// Notes: User for Selection of Product Class
const config_product_class = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_clas: "10" /*Product Class Code*/,
        name_clas: "Engine" /*Product Class Name*/,
        setg_assg: "Product Category" /*Setting Assignment*/, /*Option: Product Type, Product Category, Product Characteristic*/

        // Logs Data
        numb_objt: "10", /*Object Number*/
        type_objt: "ConfigProductClass", /*Object Type*/
        name_tabl: "config.product.class"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_clas: "20" /*Product Class Code*/,
        name_clas: "Transmission" /*Product Class Name*/,
        setg_assg: "Product Category" /*Setting Assignment*/, /*Option: Product Type, Internal Product Type, Product Group, Internal Product Group, Product Category, Product Characteristic*/

        // Logs Data
        numb_objt: "20", /*Object Number*/
        type_objt: "ConfigProductClass", /*Object Type*/
        name_tabl: "config.product.class"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    }
]

// Table ID : config.product.class.trfq
// Short Description : Configuration Product Class
// Type : Transparent Table
// Notes: User for Selection of Product Class
const config_product_class_trfq = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_clas: "10" /*Product Class Code*/,
        name_clas: "Engine" /*Product Class Name*/,

        // Assignment
        code_catg: "10" /*Product Category Code*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_clas: "1010" /*Product Class Code*/,
        name_clas: "Transmission" /*Product Class Name*/,

        // Assignment
        code_catg: "10" /*Product Category Code*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
]

// Table ID : config.product.class.assignment
// Short Description : Configuration Product Class Assignment
// Type : Transparent Table
// Notes: Product Class Assignment
const config_product_class_assignment = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        type_prod: "KM03" /*Product Type Code*/,
        type_prod_in: "" /*Internal Product Type Code*/,
        grop_prod: "" /*Product Group Code*/,
        grop_prod_in: "" /*Internal Product Group Code*/,
        code_catg: "" /*Product Category Code*/,
        char_prod: "" /*Product Characteristic Code*/,

    }
]

// Table ID : config.product.model 
// Short Description : Configuration Product Model
// Type : Transparent Table
// Notes: User for Selection of Product Model
const config_product_model = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_modl: "10" /*Product Model Code*/,
        name_modl: "PC-200" /*Product Model Name*/,

        // Assignment
        code_catg: "10" /*Product Category Code*/,
        code_clas: "10" /*Product Class Code*/,

        // Logs Data
        numb_objt: "10", /*Object Number*/
        type_objt: "ConfigProductModel", /*Object Type*/
        name_tabl: "config.product.model"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_modl: "1010" /*Product Model Code*/,
        name_modl: "PC-300" /*Product Model Name*/,

        // Assignment
        code_catg: "10" /*Product Category Code*/,
        code_clas: "10" /*Product Class Code*/,

        // Logs Data
        numb_objt: "20", /*Object Number*/
        type_objt: "ConfigProductModel", /*Object Type*/
        name_tabl: "config.product.model"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
    {
        // Indexing
        indx: "3" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_modl: "30" /*Product Model Code*/,
        name_modl: "PC-400" /*Product Model Name*/,

        // Assignment
        code_catg: "10" /*Product Category Code*/,
        code_clas: "10" /*Product Class Code*/,

        // Logs Data
        numb_objt: "30", /*Object Number*/
        type_objt: "ConfigProductModel", /*Object Type*/
        name_tabl: "config.product.model"  /*Table Name*/,    
        is_appr : "", /*Is Approved*/
        appr_numb : "", /*Approved Number*/
        is_fapp  :  "", /*Is Final Approved*/
        is_inac : "", /*Is Inactive*/
        inac_by  : "", /*Deactivated By*/
        is_lock : "", /*Is Locked*/
        lock_by : "", /*Locked By*/
        is_dele : "", /*Is Deleted*/
        dele_by : "", /*Deleted By*/
        numb_logs: "ID918842101210090080070061242", /*Logs Number*/
        date_crdt : "2 February 2025", /*Created Date (System)*/
        date_crdx : "2 February 2025", /*Created Date (User Time Zone)*/
        time_crdt : "18:00", /*Created Time (System)*/
        time_crdx  : "15:00", /*Created Time (User Time Zone)*/
        crdt_by: "Joko.Marwinto@petrosea.com", /*Created By*/
        date_updt : "", /*Updated Date (System)*/
        date_updx : "", /*Updated Date (User Time Zone)*/
        time_updt : "", /*Updated Time (System)*/
        time_updx : "", /*Updated Time (User Time Zone)*/
        updt_by : "", /*Updated By*/
    },
]

// Table ID : config.product.model.trfq 
// Short Description : Configuration Product Model
// Type : Transparent Table
// Notes: User for Selection of Product Model
const config_product_model_trfq = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_modl: "10" /*Product Model Code*/,
        name_modl: "PC-200" /*Product Model Name*/,

        // Assignment
        code_catg: "10" /*Product Category Code*/,
        code_clas: "10" /*Product Class Code*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_modl: "1010" /*Product Model Code*/,
        name_modl: "PC-300" /*Product Model Name*/,

        // Assignment
        code_catg: "10" /*Product Category Code*/,
        code_clas: "10" /*Product Class Code*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
    {
        // Indexing
        indx: "3" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_modl: "1020" /*Product Model Code*/,
        name_modl: "PC-400" /*Product Model Name*/,

        // Assignment
        code_catg: "10" /*Product Category Code*/,
        code_clas: "10" /*Product Class Code*/,

        // Transfer Request
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        type_trfq: "Create" /*Transfer Request Type*/, /*Create, Update, Delete, Locked, etc*/
    },
]

// Table ID : config.product.series
// Short Description : Configuration Product Series
// Type : Transparent Table
// Notes: User for Selection of Product Series
const config_product_series = [
    {
        // Indexing
        indx: "1" /*Index No*/, 
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        code_sers: "G" /*Product Series Code*/,
        name_sers: "Series G" /*Product Series Name*/,

    }
]

// Table ID : logs.data.header
// Short Description : Logs Data Header
// Type : Transparent Table
// Notes: N/A
const logs_data_header = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        numb_objt: "62887000142" /*Object Number*/,
        type_objt: "OrganizationID" /*Object Type*/,
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        name_tabl: "sales.activities.header"  /*Table Name*/,

        // Document Date
        type_tran: "Create" /*Transactions Type*/ /*Create, Update, Delete, Locked, Print, Share, etc*/,
        date_doct: "2 February 2025" /*Document Date (System)*/,
        date_docx: "2 February 2025" /*Document Date (User Time Zone)*/,
        time_doct: "18:00" /*Document Time (System)*/,
        time_docx: "15:00" /*Document Time (User Time Zone)*/,
        post_by: "Joko.Marwinto@petrosea.com" /*Posted By*/,
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        numb_objt: "62887000142" /*Object Number*/,
        type_objt: "OrganizationID" /*Object Type*/,
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        name_tabl: "sales.activities.item"  /*Table Name*/,

        // Document Date
        type_tran: "Create" /*Transactions Type*/ ,
        date_doct: "2 February 2025" /*Document Date (System)*/,
        date_docx: "2 February 2025" /*Document Date (User Time Zone)*/,
        time_doct: "18:00" /*Document Time (System)*/,
        time_docx: "15:00" /*Document Time (User Time Zone)*/,
        post_by: "Joko.Marwinto@petrosea.com" /*Posted By*/,
    },
]

// Table ID : logs.data.item
// Short Description : Logs Data Item
// Type : Transparent Table
// Notes: N/A
const logs_data_item = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        name_flld: "desc_shrt" /*Field Name*/,
        valu_oldd: "" /*Old Value*/,
        valu_neww: "Description" /*New Value*/,        
    },
]

// Table ID : logs.config.header
// Short Description : Logs Configuration Header
// Type : Transparent Table
// Notes: N/A
const logs_config = [
    {
        // Indexing
        indx: "1" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        idno_trfq: "TRQ9188421012" /*Transfer Request Number*/,
        stat_tfre: "Drafted" /*Transfer Request Status*/, /* Drafted, Released, Transferred */
        name_tabl: "config.product.model " /*Table Name*/,
        type_tran: "create" /*Transactions Type*/,
        name_sytm: "PTR-DEV" /*System Name*/,
    },
    {
        // Indexing
        indx: "2" /*Index No*/,
        idno_systm: "APAC001998242" /*System ID*/,
        idno_tent: "ID9188421012" /*Tenant ID*/,

        // Main Data
        numb_logs: "ID918842101210090080070077142" /*Logs Number*/,
        idno_trfq: "TRQ9188421013" /*Transfer Request Number*/,
        stat_tfre: "Drafted" /*Transfer Request Status*/, /* Drafted, Released, Transferred */
        name_tabl: "config.product.model " /*Table Name*/,
        type_tran: "update" /*Transactions Type*/,
        name_sytm: "PTR-DEV" /*System Name*/,
    },
]

export {
    // batches_header,
    // batches_item,
    logs_data_header,
    logs_data_item,
}