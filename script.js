
function setTheme(theme) {
  const root = document.documentElement;

  const themes = {
    
    
    red: {
      '--bg': '#fdeaea',
      '--card': '#f9d9d9',
      '--card-alt': '#f0b0b0',
      '--text': '#3d0f0f',
      '--text-logo': '#ff3737ff',
      '--text-alt': '#ffffff',
      '--accent': '#ff3333',
      '--stroke': '#5a0a0a',
      '--code-bg': '#3d0f0f'
    },
   
  orange: {
    '--bg': '#fff2e6',
    '--card': '#f17e20ff',
    '--card-alt': '#ffc299',
    '--text': '#4d2600',
    '--text-logo': '#f1eadfff',
    '--text-alt': '#131212ff',
    '--accent': '#ff9933',
    '--stroke': '#663300',
    '--code-bg': '#4d2600'
  },
  yellow: {
    '--bg': '#fbfccdff',
    '--card': '#b6a82bff',
    '--card-alt': '#fff099',
    '--text': '#665900',
      '--text-logo': '#fffb00ff',
    '--text-alt': '#000000',
    '--accent': '#ffeb3b',
    '--stroke': '#998800',
    '--code-bg': '#665900'
  },
  green: {
    '--bg': '#e6f2e6',
    '--card': '#d9f0d9',
    '--card-alt': '#b0e0b0',
    '--text': '#0f3d0f',
     '--text-logo': '#0f6413ff',
    '--text-alt': '#000000ff',
    '--accent': '#33cc33',
    '--stroke': '#0a5a0a',
    '--code-bg': '#0f3d0f'
  },
  skyblue: {
    '--bg': '#c7dcf8ff',
    '--card': '#739ad3ff',
    '--card-alt': '#8cc4f8ff',
    '--text': '#0f1f3d',
    '--text-logo': '#ffffff',
    '--text-alt': '#0f1f3d',
    '--accent': '#3388cc',
    '--stroke': '#0a1a5a',
    '--code-bg': '#0f1f3d'
  },
   blue: {
    '--bg': '#709edaff',
    '--card': '#4e90f3ff',
    '--card-alt': '#353ec0ff',
    '--text': '#ffffff',
    '--text-logo':'#010416ff ',
    '--text-alt': '#edf0f7ff',
    '--accent': '#3388cc',
    '--stroke': '#0a1a5a',
    '--code-bg': '#0f1f3d'
  },
  purple: {
    '--bg': '#f4e6fd',
    '--card': '#530758d0',
    '--card-alt': '#cca0e6',
    '--text': '#3d0f3d',
    '--text-logo':'#f0f2fdff ',
    '--text-alt': '#33003dff',
    '--accent': '#9933cc',
    '--stroke': '#5a0a5a',
    '--code-bg': '#3d0f3d'
  },

  light: {
      '--bg': '#eaf0f7ff',
      '--card': '#f9f9fa',
      '--card-alt': '#c4cadb9c',
      '--text': '#0a0f1f',
       '--text-logo':'#010416ff ',
      '--text-alt': '#ffffff',
      '--accent': '#8ab4ff',
      '--stroke': '#0e1426',
      '--code-bg': '#0a0f1f'
    },

    dark: {
      '--bg': '#131a30ff',
      '--card': '#303030ff',
      '--card-alt': '#0e1426',
      '--text': '#e9ecf1',
      '--text-logo':'#e9ecf1',
      '--text-alt': '#ffffff',
      '--accent': '#8ab4ff',
      '--stroke': '#26304a',
      '--code-bg': '#0a0f1f',
      '--bshadow': '0 0 20px 2px rgba(196, 243, 237, 0.56)'
    },

  };

  const selected = themes[theme];
  for (let key in selected) {
    root.style.setProperty(key, selected[key]);
  }
}
	