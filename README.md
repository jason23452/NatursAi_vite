netsh interface portproxy add v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=80 connectaddress=172.18.241.225


netsh advfirewall firewall add rule name="Open Port 80" dir=in action=allow protocol=TCP localport=80

netsh interface portproxy show all

netsh advfirewall firewall show rule name=all | findstr "80"


C:\Windows\System32>
C:\Windows\System32>netsh advfirewall firewall show rule name=all | findstr "80"
規則名稱:                             Open Port 80
本機連接埠:                           80
規則名稱:                             Open Port 80
本機連接埠:                           80
群組:                                 {78E1CD88-49E3-476E-B926-580E596AD309}
群組:                                 {78E1CD88-49E3-476E-B926-580E596AD309}
群組:                                 {78E1CD88-49E3-476E-B926-580E596AD309}
群組:                                 {78E1CD88-49E3-476E-B926-580E596AD309}
規則名稱:                             @{Microsoft.AAD.BrokerPlugin_1000.19580.1000.2_neutral_neutral_cw5n1h2txyewy?ms-resource://Microsoft.AAD.BrokerPlugin/resources/PackageDisplayName}
規則名稱:                             @{Microsoft.AAD.BrokerPlugin_1000.19580.1000.2_neutral_neutral_cw5n1h2txyewy?ms-resource://Microsoft.AAD.BrokerPlugin/resources/PackageDisplayName}
群組:                                 {78E1CD88-49E3-476E-B926-580E596AD309}
群組:                                 {78E1CD88-49E3-476E-B926-580E596AD309}
規則名稱:                             @{Microsoft.AAD.BrokerPlugin_1000.19580.1000.0_neutral_neutral_cw5n1h2txyewy?ms-resource://Microsoft.AAD.BrokerPlugin/resources/PackageDisplayName}
群組:                                 @{Microsoft.AAD.BrokerPlugin_1000.19580.1000.0_neutral_neutral_cw5n1h2txyewy?ms-resource://Microsoft.AAD.BrokerPlugin/resources/PackageDisplayName}
規則名稱:                             @{Microsoft.AAD.BrokerPlugin_1000.19580.1000.0_neutral_neutral_cw5n1h2txyewy?ms-resource://Microsoft.AAD.BrokerPlugin/resources/PackageDisplayName}
群組:                                 @{Microsoft.AAD.BrokerPlugin_1000.19580.1000.0_neutral_neutral_cw5n1h2txyewy?ms-resource://Microsoft.AAD.BrokerPlugin/resources/PackageDisplayName}
群組:                                 {78E1CD88-49E3-476E-B926-580E596AD309}
群組:                                 {78E1CD88-49E3-476E-B926-580E596AD309}
本機連接埠:                           3580
本機連接埠:                           3580
規則名稱:                             @{MicrosoftWindows.Client.LKG_1000.22621.3880.0_x64__cw5n1h2txyewy?ms-resource://MicrosoftWindows.Client.LKG/resources/ProductPkgDisplayName}
群組:                                 @{MicrosoftWindows.Client.LKG_1000.22621.3880.0_x64__cw5n1h2txyewy?ms-resource://MicrosoftWindows.Client.LKG/resources/ProductPkgDisplayName}
規則名稱:                             @{MicrosoftWindows.Client.LKG_1000.22621.3880.0_x64__cw5n1h2txyewy?ms-resource://MicrosoftWindows.Client.LKG/resources/ProductPkgDisplayName}
群組:                                 @{MicrosoftWindows.Client.LKG_1000.22621.3880.0_x64__cw5n1h2txyewy?ms-resource://MicrosoftWindows.Client.LKG/resources/ProductPkgDisplayName}
本機連接埠:                           80,443
遠端連接埠:                           80,443
本機連接埠:                           80
本機連接埠:                           80
遠端連接埠:                           80
遠端連接埠:                           80,443
本機連接埠:                           7777,7778,7779,7780,7781,5004,5005,50004,50005,50006,50007,50008,50009,50010,50011,50012,50013
本機連接埠:                           80,443
本機連接埠:                           80,443
本機連接埠:                           80
遠端連接埠:                           80,443
本機連接埠:                           80
LocalIP:                              fe80::/64
RemoteIP:                             LocalSubnet,fe80::/64,ff02::1-ff02::1
遠端連接埠:                           80,443
本機連接埠:                           7680
RemoteIP:                             LocalSubnet,fe80::/64,ff02::2-ff02::2
RemoteIP:                             fe80::/64
本機連接埠:                           7680
