import MainGrid from './../src/components/MainGrid'
import Box from './../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from './../src/lib/AluraCommons'
import { ProfileRelationsBoxWrapper } from './../src/components/ProfileRelation';

function ProfileSideBar(props){
  return(
    <Box className="ProfileArea" style= {{ gridArea: 'profileArea' }}>
    <img src= {`http://github.com/${props.githubUser}.png`} style={{borderRadius: '8px'}} />
  </Box>
  );
}

export default function Home() {
  const githubUser= 'peas';
  const Favoritas = ['juunegreiros', 'omariosouto', 'rafaballerini', 'marcobrunodev', 'felipefialho']
  
  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div>
        <ProfileSideBar githubUser ={githubUser}/>
      </div>
      <div>
      <Box className="welcomeArea" style= {{ gridArea: 'welcomeArea' }}>
        Bem Vindo(a)

        <OrkutNostalgicIconSet />
      </Box>
      
      </div> 
      <div className="profileRelationsArea" style= {{ gridArea: 'profileRelationsArea' }}>
        
        <ProfileRelationsBoxWrapper>
        <h2 className='smallTitle'>Pessoas da Comunidades ({Favoritas.length})</h2>

        <ul>
              {Favoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
        </ul>
        </ProfileRelationsBoxWrapper>
        <Box className="profileRelationsArea" style= {{ gridArea: 'profileRelationsArea' }}>
        Comunidades
        </Box>
      </div>


    </MainGrid>
    </>
  )
}
