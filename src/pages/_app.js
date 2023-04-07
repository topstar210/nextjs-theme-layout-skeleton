import '@/styles/globals.css'
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

import ThemeChanger from '@/components/ThemeChanger';
import Layout1 from '@/layouts/Layout1'
import Layout2 from '@/layouts/Layout2'
import Layout3 from '@/layouts/Layout1'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
 
  const getCurrTheme = (theme) => {
    setTheme(theme)
    // // saving theme when select the theme type
    // axios.post('/api/save_theme',{ theme });
  }

  // initial load theme with api
  useEffect(async ()=>{
    // const res = await axios.get('/api/get_theme');
    // const settingData = res.data;
    // setTheme(settingData.theme)
  },[])

  return (
    <ThemeProvider>
      <ThemeChanger currTheme={getCurrTheme} />
      {theme === "light" &&
        <Layout1>
          <Component {...pageProps} />
        </Layout1>
      }
      {theme === "dark" &&
        <Layout2>
          <Component {...pageProps} />
        </Layout2>
      }
      {theme === "pink" &&
        <Layout3>
          <Component {...pageProps} />
        </Layout3>
      }
    </ThemeProvider>
  )
}
