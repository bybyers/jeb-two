'use client'

// Tools
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"


// Types
import { NavigationType } from "@/types/documents/navigation-type"

// Components
import Route from "@/components/route"

interface NavProps {
  data: NavigationType
}

const FooterNav: React.FC<NavProps> = ({
  data
}) => {

  return (
    <NavigationMenu>
			<NavigationMenuList className='flex flex-wrap gap-y-2 lg:gap-x-10'>
        {data.items?.map((item: any, index: number) => (
          <NavigationMenuItem 
            key={'footer' + index}
            id={'footer' + index}
          >
            <Route data={item} className='flex'>
              <motion.div
                initial={{ 
                  scale: 1
                }}
                whileHover={{ 
                  scale: 1.05
                }}
                whileTap={{ 
                  scale: 0.95
                }}
                transition={{ 
                  type: 'spring',
                  duration: 0.5
                }}
                className='flex w-full'
              >
                <Button variant="secondary" size="navigation">
                  {item.title ? item.title : 'Needs title'}
                </Button>
              </motion.div>
            </Route>
          </NavigationMenuItem>
        ))}

      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default FooterNav