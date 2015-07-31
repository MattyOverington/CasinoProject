# CasinoProject

Computer Science Project for Term 3

bwi



#To-Do List
    - Start development of texas holdem html and javascript page
        - get a header done for html
	    - create a front page with game options
		- e.g., number of players, starting pot, blind options, etc.
        - re-learn how to code javascript and use it to create the poker game
            - design how the game will work
                - will need several classes
                    - player
                    - card
                    - hand
                    - game (?)
                - plan everything else
            - integrate random dealing 
               - get cards figured out
               - arrange players around a table
               - get all nessecary images
            - implement all the nessecary controls
                - allow for player to   
                    - fold
                    - check
                    - raise
                    - go all in
                    - get/draw button images for the actions
                - change the actions of the dealer based on these actions
            - display money
                - implement a system for calculating the winnings and losses of a player
                - keep and account for each play and take/subtract from this
                - keep a pot for each round and add a side pot if nessecary
            - implement AI
                - get the AI to recognise situations where folding, raising and checking are good ideas
                    - maybe develop some kind of rating system
                    - rank initial hand based on the 
                        - distance between the two cards
                        - number of the two cards
                        - e.g. 2, 7 is the worst, A , A is the best
                        - change the rating as each card is added, again based on distance & value (e.g. 'pair' distance = 0)
                - once this is done, use it as a base
                - add random chances based on the rating for the AI to make a 'mistake'
                - add the ability for the AI to recognise where bluffing is an option and add a weighted chance for this to happen
                    - change the ai's behaviour afterward to account for its decision to bluff; maybe increase its hands rating.
                - implement its ability to make desicions based on other players actions 
                    - abiliy to see through a bluff 
                    -to go for the side pot
            
         
