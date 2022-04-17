import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signupsignin1",
        //  editProfile: "b2c_1_edit_profile_v2"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://expeedsoft.b2clogin.com/expeedsoft.onmicrosoft.com/B2C_1_signupsignin1",
            // ?domain_hint=expeed.com"
        },
        //  editProfile: {
        //      authority: "https://your-tenant-name.b2clogin.com/your-tenant-name.onmicrosoft.com/b2c_1_edit_profile_v2"
        //  }
    },
    authorityDomain: "expeedsoft.b2clogin.com"
};


export const msalConfig: Configuration = {
    auth: {
        clientId: 'ecf21b44-5b0d-42ce-802d-7654d9b757eb',
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain],
        redirectUri: '/'
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: isIE,
    },
    system: {
        loggerOptions: {
            loggerCallback: (logLevel, message, containsPii) => {
                console.log(message);
            },
            logLevel: LogLevel.Verbose,
            piiLoggingEnabled: false
        }
    }
}

export const protectedResources = {
    todoListApi: {
        endpoint: "http://localhost:5000/api/todolist",
        scopes: ["https://expeedsoft.onmicrosoft.com/api/tasks.read"],
    },
}
export const loginRequest = {
    scopes: []
};