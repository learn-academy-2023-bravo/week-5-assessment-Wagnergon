# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#Psuedocode 
# declare a method using the words, and letter as paramaters
# use .select ruby method to filter an array of words
# use |word| inside the block to represent each element
# use word.include that will check if the word has the given letter if the condition is true the word will be selected

def words_containing_letters(words, letter)
    words.select { |word| word.include?(letter)}
end 

p words_containing_letters(beverages_array, letter_o)
p words_containing_letters(beverages_array, letter_t)

# ["coffee", "soda water"]
# ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 
#Psuedo code
# name a new method sorted_states
# make a hash the paramater
# use .flatten to remove the nested arrays 
# use .sort to return the sorted

def sorted_states(hash)
    hash.values.flatten.sort
end

p sorted_states(us_states)
#["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]  


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# psuedocode
# make new class named bike
# initialize make the paramaters mmodel wheel and current speed
# set the current speed to = 0
# make a method bike_info
# use a string interpolation to get the model and the wheels it has and say how fast it is going

# class Bike
#     def initialize(model, wheels = 2, current_speed = 0)
#       @model = model
#       @wheels = wheels
#       @current_speed = current_speed
#     end
  
#     def bike_info
#       "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
#     end
#   end
  


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# psuedo code
# add a new method for pedal_faster
# use += to add to the current speed
# add a new method for braking 
# make the speed decrease 
# make the current speed 0 if @currentspeed is less than 0 since we cannot go negative 
class Bike
    def initialize(model, wheels = 2, current_speed = 0)
      @model = model
      @wheels = wheels
      @current_speed = current_speed
    end
  
    def bike_info
      "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(speed_increase)
    @current_speed += speed_increase
    end

    def brake(speed_decrease)
    @current_speed -= speed_decrease
    @current_speed = 0 if @current_speed < 0
    end
end
    
my_bike = Bike.new('bike ')
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18) 
p my_bike.brake(5) 
p my_bike.brake(25) 

# 10
# 28
# nil not sure why I got nil here for the output 
# 0