dsinv:Mask.SPR.experiment.typed a dskern:Mask ;
    dskern:property
    [dskern:key "type" ;
       dskern:property rdf:type ;
       dskern:expanded true ;
       dskern:compact true; ], 
    [ dskern:key "experimentId" ;
        dskern:property dsinv:experimentNumber ],  
    [ dskern:key "title" ;
        dskern:property dsinv:studyTitle ],  
    [ dskern:key "experimentType" ;
        dskern:property dsinv:studyType ;
        dskern:mask dsinv:Mask.SPR.study_type_ref ;
        dskern:expanded true],  
    [ dskern:key "gmp" ;
        dskern:property dsinv:gmp ],  
    [ dskern:key "method" ;
        dskern:property dsinv:method ]
