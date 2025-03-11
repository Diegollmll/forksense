import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NavLink() {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        initial: {
            opacity: 0,
            x: -20
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        }
    }

    return (
        <motion.nav 
            className="flex flex-col gap-10 text-white text-4xl lg:text-6xl font-bold"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            <motion.div variants={itemVariants}>
                <Link 
                    href="#" 
                    className="hover:text-yellow-400 transition-colors duration-300 transform hover:translate-x-2 text-start relative group title-font"
                >
                    <span className="relative">
                        CARACTERÍSTICAS
                        <motion.span 
                            className="absolute -bottom-2 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                        />
                    </span>
                </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
                <Link 
                    href="#" 
                    className="hover:text-yellow-400 transition-colors duration-300 transform hover:translate-x-2 text-start relative group title-font"
                >
                    <span className="relative">
                        APLICACIÓN
                        <motion.span 
                            className="absolute -bottom-2 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                        />
                    </span>
                </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
                <Link 
                    href="#" 
                    className="hover:text-yellow-400 transition-colors duration-300 transform hover:translate-x-2 text-start relative group title-font"
                >
                    <span className="relative">
                        BLOG
                        <motion.span 
                            className="absolute -bottom-2 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                        />
                    </span>
                </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
                <Link 
                    href="#" 
                    className="hover:text-yellow-400 transition-colors duration-300 transform hover:translate-x-2 text-start relative group title-font"
                >
                    <span className="relative">
                        SOPORTE AL CLIENTE
                        <motion.span 
                            className="absolute -bottom-2 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                        />
                    </span>
                </Link>
            </motion.div>
        </motion.nav>
    );
}
