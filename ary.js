presona ps = new presona ( "Ary Shardey" , 05 , 04 , 2003 );
String  dia = "05/04" ;
cumpleaños  = ps . getCumpleaños ();
    while ( true ){
        if (dia. equals (cumpleaños)){
            System . out . println ( "happybirthday" + ps . getNombre ());
            break ;
        } else {
        System . out . println ( "hoynoeselcumpleañosde" + ps . getNombre ());
        }
    }
}
